import { ChainId } from "types/chains";
import { DAppProvider, ProviderNames, ProviderProps } from "types/web3";

export const browserHasInjectedProvider = () => !!window.ethereum;

export const getAccountFrom = async (
  web3Provider: DAppProvider
): Promise<string | null> => {
  const signer = web3Provider.getSigner();
  if (signer) {
    try {
      const account = await signer.getAddress();
      return account;
    } catch (e: any) {}
  }
  return null;
};

export const getChainIdFrom = async (
  web3Provider: DAppProvider
): Promise<number> => {
  const { chainId } = await web3Provider.getNetwork();
  return chainId;
};

export const getDAppProviderInfo = async (
  dappProvider: DAppProvider,
  providerName?: ProviderNames
): Promise<ProviderProps> => {
  const network = await getChainIdFrom(dappProvider);
  const account = (await getAccountFrom(dappProvider)) || "";
  const available = Boolean(account);

  return {
    name: providerName || "unknown",
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
