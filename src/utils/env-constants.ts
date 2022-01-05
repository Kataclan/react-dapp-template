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

export const CHAIN_ID = {
  POLYGON: "137",
  MUMBAI: "80001",
};

export const DEFAULT_CHAIN_ID = IS_PRODUCTION
  ? CHAIN_ID.POLYGON
  : CHAIN_ID.MUMBAI;
export const DEFAULT_MUMBAI_RPC =
  process.env.REACT_APP_DEFAULT_MUMBAI_RPC || "";
export const DEFAULT_POLYGON_RPC =
  process.env.REACT_APP_DEFAULT_POLYGON_RPC || "";

export const DEFAULT_MUMBAI_EXPLORER =
  process.env.REACT_APP_DEFAULT_MUMBAI_EXPLORER || "";
export const DEFAULT_POLYGON_EXPLORER =
  process.env.REACT_APP_DEFAULT_POLYGON_EXPLORER || "";

export const DEFAULT_RPC_URL = IS_PRODUCTION
  ? DEFAULT_POLYGON_RPC
  : DEFAULT_MUMBAI_RPC;

export const DEFAULT_EXPLORER_URL = IS_PRODUCTION
  ? DEFAULT_POLYGON_RPC
  : DEFAULT_MUMBAI_RPC;

// IPFS
export const IPFS_GATEWAY = process.env.REACT_APP_IPFS_GATEWAY || "";

// INFURA
export const INFURA_MUMBAI_TOKEN = process.env.REACT_APP_INFURA_MUMBAI_TOKEN;
export const INFURA_POLYGON_TOKEN = process.env.REACT_APP_INFURA_POLYGON_TOKEN;

export const INFURA_RPC_URL = `https://polygon-${
  IS_PRODUCTION ? "polygon" : "mumbai"
}.infura.io/v3/${IS_PRODUCTION ? INFURA_POLYGON_TOKEN : INFURA_MUMBAI_TOKEN}`;

export const BNC_KEY = process.env.REACT_APP_BNC_KEY || "";
