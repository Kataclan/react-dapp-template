// APP
export const APP_ENV = process.env.REACT_APP_ENV;
export const NODE_ENV = process.env.NODE_ENV;
export const IS_PRODUCTION = APP_ENV === "production";
export const PUBLIC_URL = process.env.PUBLIC_URL;
export const GATEWAY_URL =
  IS_PRODUCTION || window.location.hash === "#prod" ? "" : "";

// TOOLS
export const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS || "";
export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN || "";

// CHAINS & PROVIDERS
export const CHAIN_ID = {
  UNKNOWN: "",
  POLYGON: "137",
  MUMBAI: "80001",
};
export const DEFAULT_CHAIN_ID = IS_PRODUCTION
  ? CHAIN_ID.POLYGON
  : CHAIN_ID.MUMBAI;
export const DEFAULT_MUMBAI_RPC = process.env.REACT_APP_DEFAULT_MUBAI_RPC || "";
export const DEFAULT_POLYGON_RPC =
  process.env.REACT_APP_DEFAULT_POLYGON_RPC || "";

export const DEFAULT_MUMBAI_EXPLORER =
  process.env.REACT_APP_DEFAULT_MUMBAI_EXPLORER || "";
export const DEFAULT_POLYGON_EXPLORER =
  process.env.REACT_APP_DEFAULT_POLYGON_EXPLORER || "";

export const DEFAULT_RPC_URL = IS_PRODUCTION
  ? DEFAULT_MUMBAI_RPC
  : DEFAULT_POLYGON_RPC;

export const DEFAULT_EXPLORER_URL = IS_PRODUCTION
  ? DEFAULT_MUMBAI_RPC
  : DEFAULT_POLYGON_RPC;

// IPFS
export const IPFS_GATEWAY = process.env.REACT_APP_IPFS_GATEWAY || "";

// INFURA
export const INFURA_TEST_TESTNET_TOKEN =
  process.env.REACT_APP_INFURA_PROD_MAINNET_TOKEN;
export const INFURA_TEST_MAINNET_TOKEN =
  process.env.REACT_APP_INFURA_TEST_MAINNET_TOKEN;
export const INFURA_PROD_MAINNET_TOKEN =
  process.env.REACT_APP_INFURA_PROD_MAINNET_TOKEN;

export const INFURA_RPC_URL = `https://polygon-${
  IS_PRODUCTION ? "polygon" : "mumbai"
}.infura.io/v3/${
  IS_PRODUCTION ? INFURA_PROD_MAINNET_TOKEN : INFURA_TEST_MAINNET_TOKEN
}`;

export const BNC_KEY = process.env.REACT_APP_BNC_KEY || "";
