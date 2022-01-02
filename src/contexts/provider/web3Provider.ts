import { ProviderProps } from "contexts/provider";
import { _getChainId } from "contexts/config/global";
import { ChainId } from "types/chains";
import { DAppProvider, ProviderNames } from "types/web3";

import { ethers } from "ethers";
import { DEFAULT_MUMBAI_RPC, DEFAULT_POLYGON_RPC } from "utils/env-constants";

// TODO: USE INFURA NODES
const web3ReadOnly: { [chainId: string]: DAppProvider } = {
  "80001": window.ethereum
    ? new ethers.providers.Web3Provider(window.ethereum as any)
    : new ethers.providers.JsonRpcProvider(DEFAULT_MUMBAI_RPC),
  "137": window.ethereum
    ? new ethers.providers.Web3Provider(window.ethereum as any)
    : new ethers.providers.JsonRpcProvider(DEFAULT_POLYGON_RPC),
};

export const getWeb3ReadOnly = (): DAppProvider => {
  const chainId = parseInt(_getChainId(), 10);
  if (!web3ReadOnly[chainId]) {
    // FOR LOCAL NODES
    const provider = new ethers.providers.JsonRpcProvider();
    return provider;
  }
  return web3ReadOnly[chainId];
};

export const setWeb3ReadOnly = (): void => {
  web3ReadOnly[_getChainId()] = getWeb3ReadOnly();
};

export const getAccountFrom = async (
  web3Provider: DAppProvider
): Promise<string | null> => {
  const signer = web3Provider.getSigner();
  console.log(signer);
  if (signer) {
    try {
      const account = await signer.getAddress();
      return account;
    } catch (e: any) {
      console.log(e.message);
    }
  }
  return null;
};

export const getChainIdFrom = async (
  web3Provider: DAppProvider
): Promise<number> => {
  const { chainId } = await web3Provider.getNetwork();
  return chainId;
};

export const getProviderInfo = async (
  web3Instance: DAppProvider,
  providerName?: ProviderNames
): Promise<ProviderProps> => {
  const network = await getChainIdFrom(web3Instance);
  const account = (await getAccountFrom(web3Instance)) || "";
  const available = Boolean(account);

  return {
    name: providerName || "",
    available,
    loaded: !!account,
    account,
    network: network.toString() as ChainId,
  };
};

export const isTxPendingError = (err: Error): boolean => {
  const WEB3_TX_NOT_MINED_ERROR = "Transaction was not mined within";
  return (err.message || "").startsWith(WEB3_TX_NOT_MINED_ERROR);
};
