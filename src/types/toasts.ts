import { ToastType, ToastOptions } from "react-hot-toast/dist/core/types";

export const SUCCESS = "success";
export const ERROR = "error";
export const WARNING = "warning";
export const INFO = "info";

export const shortDuration = 5000;
export const longDuration = 10000;

export type Toast = {
  message: string;
  type: ToastType;
  key?: TOAST_ID | number;
  options?: ToastOptions;
  dismissed?: boolean;
};

export enum TOAST_ID {
  DEFAULT_ERROR_MESSAGE,
  UNLOCK_WALLET_MSG,
  CONNECT_WALLET_ERROR_MSG,
  SIGN_TX_MSG,
  TX_REJECTED_MSG,
  TX_EXECUTED_MSG,
  TX_CANCELLATION_EXECUTED_MSG,
  TX_FAILED_MSG,
  TX_PENDING_MSG,
  TX_STILL_PENDING_MSG,
  TX_WAITING_CONFIRMATION_MSG,
  TX_CONFIRMATION_EXECUTED_MSG,
  TX_CONFIRMATION_FAILED_MSG,
}
