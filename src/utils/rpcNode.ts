import {
  APP_ENV,
  DEFAULT_MUMBAI_RPC,
  DEFAULT_POLYGON_RPC,
} from "./env-constants";

export const getRpcNodeUrl = () => {
  if (APP_ENV === "production") {
    return DEFAULT_POLYGON_RPC;
  }
  return DEFAULT_MUMBAI_RPC;
};
