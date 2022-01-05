import isEmpty from "lodash";
import {
  APP_ENV,
  DEFAULT_CHAIN_ID,
  DEFAULT_EXPLORER_URL,
  DEFAULT_RPC_URL,
  INFURA_RPC_URL,
} from "utils/env-constants";

import { ChainConfig, ChainId, ChainName, Chains } from "types/chains";
import { emptyChainConfig, getChains } from "./cache";
import local from "utils/storage/local";
import { configs } from "../../config/constants/chains";
import { localStorageKeys } from "../../config/constants/localStorage";

export type GlobalConfigState = {
  chainId: string;
  chainName?: string;
};

export const currentConfig =
  configs[APP_ENV === "development" ? Chains.MUMBAI : Chains.POLYGON] || {};

export const LOCAL_CONFIG_KEY = localStorageKeys.LOCAL_CONFIG_KEY;

const getInitialChainId = (): ChainId => {
  const localItem = local.getItem<GlobalConfigState>(LOCAL_CONFIG_KEY);

  if (!localItem || isEmpty(!localItem.chainId)) {
    local.setItem<GlobalConfigState>(LOCAL_CONFIG_KEY, {
      chainId: DEFAULT_CHAIN_ID.toString(),
    });
  }
  return (localItem?.chainId || DEFAULT_CHAIN_ID) as ChainId;
};

// GLOBAL CHAIN ID
let _chainId = getInitialChainId();

export const _setChainId = (newChainId: ChainId) => (_chainId = newChainId);

export const _getChainId = (): ChainId => _chainId;

export const _getChainIdStr = (): string => _chainId;

export const isValidChainId = (chainId: unknown): chainId is ChainId =>
  getChains().some((chain) => chain.chainId === chainId);

export const getChainById = (chainId: ChainId): ChainConfig =>
  getChains().find((chain) => chain.chainId === chainId) || emptyChainConfig;

export const getChainConfig = (): ChainConfig => getChainById(_getChainId());

export const getChainName = (): ChainName =>
  getChainConfig().chainName as ChainName;

export const getNativeCurrency = (): ChainConfig["nativeCurrency"] =>
  getChainConfig().nativeCurrency;

export const getRpcUrl = (): string => getChainConfig().rpcUrls[0];

export const getRpcServiceUrl = (infura?: boolean): string =>
  infura ? INFURA_RPC_URL : DEFAULT_RPC_URL;

export const getPublicRpcUrl = (): string => {
  return DEFAULT_RPC_URL;
};

export const getExplorerUrl = (): string => {
  return DEFAULT_EXPLORER_URL;
};
