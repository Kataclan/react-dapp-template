import {
  getChainConfig,
  getExplorerUrl,
  getPublicRpcUrl,
} from "../config/global";
import { ChainId } from "types/chains";
import { getChainHexStr } from "utils/web3";
import { DEFAULT_CHAIN_ID } from "utils/env-constants";
import { noop } from "lodash";

export const WALLET_ERRORS = {
  UNRECOGNIZED_CHAIN: 4902,
  USER_REJECTED: 4001,
  ADD_EXISTING_CHAIN: -32600,
};

/**
 * Switch the chain assuming it's MetaMask.
 * @see https://github.com/MetaMask/metamask-extension/pull/10905
 */
export const metamaskRequestSwitch = async (
  chainId: ChainId
): Promise<void> => {
  await window.ethereum.request({
    method: "wallet_switchEthereumChain",
    chainId: getChainHexStr(chainId),
    params: [
      {
        chainId: getChainHexStr(chainId),
      },
    ],
  });
};

/**
 * Add a chain config based on EIP-3085.
 * Known to be implemented by MetaMask.
 * @see https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
 */
export const metamaskRequestAdd = async (chainId: ChainId): Promise<void> => {
  const { chainName, nativeCurrency } = getChainConfig();
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: getChainHexStr(chainId),
        chainName,
        nativeCurrency,
        rpcUrls: [getPublicRpcUrl()],
        blockExplorerUrls: [getExplorerUrl()],
      },
    ],
  });
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
export const switchToDefaultNetwork = async (
  onSwitch = noop,
  onError = noop
): Promise<void> => {
  const chainId = DEFAULT_CHAIN_ID as ChainId;
  try {
    await metamaskRequestSwitch(chainId);
    onSwitch();
  } catch (e: any) {
    console.log(e);
    if (e.code === WALLET_ERRORS.USER_REJECTED) {
      return onError();
    }

    if (e.code === WALLET_ERRORS.UNRECOGNIZED_CHAIN) {
      try {
        await metamaskRequestAdd(chainId);
        onSwitch();
      } catch (e: any) {
        if (e.code === WALLET_ERRORS.USER_REJECTED) {
          return onError();
        }
      }
    }
  }
};
