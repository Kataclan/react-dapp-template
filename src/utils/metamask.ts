import { ChainConfig, ChainId } from "types/chains";
import { getChainHexStr } from "utils/hex";

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
export const metamaskRequestAdd = async (
  chainConfig: ChainConfig
): Promise<void> => {
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [chainConfig],
  });
};
