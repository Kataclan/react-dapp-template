import { providers } from "ethers";
import { ChainId } from "./chains";

export type Web3Provider = providers.Web3Provider;
export type JsonRPCProvider = providers.JsonRpcProvider;
export type InfuraProvider = providers.InfuraProvider;

export type DAppProvider = Web3Provider | JsonRPCProvider | InfuraProvider;

export type ProviderNames =
  | "injected"
  | "public"
  | "infura"
  | "walletconnect"
  | "unknown";

export type ProviderProps = {
  name: ProviderNames;
  loaded: boolean;
  available: boolean;
  account: string;
  network: ChainId;
};
