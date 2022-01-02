export enum RPC_AUTHENTICATION {
  API_KEY_PATH = "API_KEY_PATH",
  NO_AUTHENTICATION = "NO_AUTHENTICATION",
  UNKNOWN = "UNKNOWN",
}
export type RpcUri = {
  authentication: RPC_AUTHENTICATION;
  value: string;
};
export type NativeCurrency = {
  name: string;
  symbol: string;
  decimals: number;
};
export enum GAS_PRICE_TYPE {
  ORACLE = "ORACLE",
  FIXED = "FIXED",
  UNKNOWN = "UNKNOWN",
}

export type GasPriceOracle = {
  type: GAS_PRICE_TYPE.ORACLE;
  uri: string;
  gasParameter: string;
  gweiFactor: string;
};

export type GasPriceFixed = {
  type: GAS_PRICE_TYPE.FIXED;
  weiValue: string;
};

export type GasPriceUnknown = {
  type: GAS_PRICE_TYPE.UNKNOWN;
};

export type GasPrice = (GasPriceOracle | GasPriceFixed | GasPriceUnknown)[];

export enum ChainName {
  MUMBAI = "MUMBAI",
  POLYGON = "POLYGON",
  LOCAL = "LOCAL",
  UNKNOWN = "UNKNOWN",
}
export type ChainId = "137" | "80001" | "";

export type ShortName = "mumbai" | "matic" | "";
export type ChainConfig = {
  chainId: string;
  chainName: string;
  nativeCurrency: NativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls?: string[];
};
export type ChainInfo = {
  transactionService: string;
  chainId: string;
  chainName: string;
  shortName: string;
  description: string;
  rpcUri: RpcUri;
  safeAppsRpcUri: RpcUri;
  publicRpcUri: RpcUri;
  nativeCurrency: NativeCurrency;
  gasPrice: GasPrice;
  disabledWallets: string[];
};

export type EthersNetwork = {
  name: string;
  chainId: number;
  _defaultProvider: (providers: DAppProvider) => void;
  url: string;
};
