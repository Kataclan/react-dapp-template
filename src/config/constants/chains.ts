import { ChainConfig, ChainId, Chains } from "types/chains";
import {
  CHAIN_ID,
  DEFAULT_MUMBAI_EXPLORER,
  DEFAULT_MUMBAI_RPC,
  DEFAULT_POLYGON_EXPLORER,
  DEFAULT_POLYGON_RPC,
} from "utils/env-constants";

export enum WALLETS {
  METAMASK = "metamask",
  WALLET_CONNECT = "walletconnect",
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

export const configs: { [key in ChainId]: ChainConfig } = {
  [Chains.MUMBAI]: MUMBAI_CONFIG,
  [Chains.POLYGON]: POLYGON_CONFIG,
};
