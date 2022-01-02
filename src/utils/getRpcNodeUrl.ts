import sample from "lodash/sample";
import {
  APP_ENV,
  DEFAULT_MUMBAI_RPC,
  DEFAULT_POLYGON_RPC,
} from "./env-constants";

if (APP_ENV !== "production" && !(DEFAULT_MUMBAI_RPC || DEFAULT_POLYGON_RPC)) {
  throw Error("At least 1 RPC URL has to be defined");
}

export const nodes = [DEFAULT_MUMBAI_RPC];

export const getRpcNodeUrl = () => {
  if (APP_ENV === "production") {
    return DEFAULT_POLYGON_RPC;
  }
  return sample(nodes);
};
