import { getRpcServiceUrl } from "contexts/config/global";
import { ethers } from "ethers";
import { ChainConfig, EthersNetwork } from "types/chains";
import { DAppProvider } from "types/web3";
import {
  CHAIN_ID,
  DEFAULT_MUMBAI_EXPLORER,
  DEFAULT_MUMBAI_RPC,
  DEFAULT_POLYGON_EXPLORER,
  DEFAULT_POLYGON_RPC,
} from "utils/env-constants";

export enum WALLETS {
  METAMASK = "metamask",
  WALLET_CONNECT = "walletConnect",
}

export const MUMBAI_CONFIG = {
  chainId: `0x${parseInt(CHAIN_ID.MUMBAI, 10).toString(16)}`,
  chainName: "Mumbai Network",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: [DEFAULT_MUMBAI_RPC],
  blockExplorerUrls: [DEFAULT_MUMBAI_EXPLORER],
};

export const POLYGON_CONFIG = {
  chainId: `0x${parseInt(CHAIN_ID.POLYGON || "", 10).toString(16)}`,
  chainName: "Polygon Network",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: [DEFAULT_POLYGON_RPC],
  blockExplorerUrls: [DEFAULT_POLYGON_EXPLORER],
};

export const configs: { [chainId: string]: ChainConfig } = {
  // LOCAL: HARDHAT_CONFIG,
  MUMBAI_CONFIG: MUMBAI_CONFIG,
  POLYGON_CONFIG: POLYGON_CONFIG,
};

export const mumbaiEthers: EthersNetwork = {
  name: "mumbai",
  chainId: 80001,
  url: DEFAULT_MUMBAI_RPC,
  _defaultProvider: (providers: DAppProvider) =>
    new ethers.providers.JsonRpcProvider(DEFAULT_MUMBAI_RPC),
};

export const maticEthers: EthersNetwork = {
  name: "matic",
  chainId: 137,
  url: DEFAULT_POLYGON_RPC,
  _defaultProvider: (providers: DAppProvider) =>
    new ethers.providers.JsonRpcProvider(DEFAULT_POLYGON_RPC),
};
