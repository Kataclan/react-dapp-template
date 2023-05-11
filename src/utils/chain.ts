import {
  APP_ENV,
  DEFAULT_CHAIN_ID,
  DEFAULT_EXPLORER_URL,
  DEFAULT_RPC_URL,
  INFURA_RPC_URL,
} from "utils/env-constants";

import { ChainConfig, ChainId, ChainName, Chains } from "types/chains";
import { configs, EMPTY_CONFIG } from "config/constants/chains";
import { metamaskRequestAdd, metamaskRequestSwitch } from "./metamask";

export const WALLET_ERRORS = {
  UNRECOGNIZED_CHAIN: 4902,
  USER_REJECTED: 4001,
  ADD_EXISTING_CHAIN: -32600,
};

/**
 * Set chain config by project environment
 */
const _chainConfig =
  configs[APP_ENV === "development" ? Chains.MUMBAI : Chains.POLYGON] ||
  EMPTY_CONFIG;

export const getChainId = () => DEFAULT_CHAIN_ID as ChainId;

export const isValidChainId = (chainId: unknown): chainId is ChainId =>
  chainId === getChainId();

export const getChainConfig = (): ChainConfig => _chainConfig;

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

export const shouldSwitchNetwork = (
  desiredNetwork: string,
  currentNetwork: string
): boolean => {
  return currentNetwork ? desiredNetwork !== currentNetwork : false;
};

/**
 * Try switching the wallet chain to the default project chain,
 * and if it fails, try adding the default chain config
 */
export const switchToDefaultNetwork = async (): Promise<void> => {
  try {
    await metamaskRequestSwitch(getChainId());
  } catch (e: any) {
    if (e.code === WALLET_ERRORS.USER_REJECTED) {
      throw new Error("User rejected wallet connection");
    }

    if (e.code === WALLET_ERRORS.UNRECOGNIZED_CHAIN) {
      try {
        await metamaskRequestAdd(getChainConfig());
      } catch (e: any) {
        if (e.code === WALLET_ERRORS.USER_REJECTED) {
          throw new Error("User rejected wallet connection");
        }
      }
    }
  }
};
