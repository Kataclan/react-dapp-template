import { localStorageKeys } from "config/constants/localStorage";
import { ProviderProps } from "contexts/provider";
import { isEmpty } from "lodash";
import { ChainId } from "types/chains";
import { DAppProvider, ProviderNames } from "types/web3";
import local from "utils/storage/local";

export const browserHasInjectedProvider = () => !!window.ethereum;

export const loadLastUsedProvider = () => {
  const lastUsedProvider = local.getItem<string>(
    localStorageKeys.LAST_USED_PROVIDER_KEY
  );
  return lastUsedProvider;
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
