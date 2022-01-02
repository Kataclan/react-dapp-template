import { TOAST_MESSAGES } from "config/constants/toasts";
import { TOAST_ID } from "types/toasts";
import { ToastType } from "react-hot-toast/dist/core/types";

export const TOAST_TX_WAITING_CONFIRMATION = {
  key: TOAST_ID.TX_WAITING_CONFIRMATION_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_WAITING_CONFIRMATION_MSG],
  type: "loading" as ToastType,
};

export const TOAST_TX_CONFIRMATION_EXECUTED = {
  key: TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG],
  type: "success" as ToastType,
};

export const TOAST_TX_CONFIRMATION_FAILED = {
  key: TOAST_ID.TX_CONFIRMATION_FAILED_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_CONFIRMATION_FAILED_MSG],
  type: "error" as ToastType,
};

export const TOAST_TX_PENDING = {
  key: TOAST_ID.TX_PENDING_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_PENDING_MSG],
  type: "loading" as ToastType,
};

export const TOAST_TX_STILL_PENDING = {
  key: TOAST_ID.TX_STILL_PENDING_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_STILL_PENDING_MSG],
  type: "loading" as ToastType,
};

export const TOAST_TX_FAILED = {
  key: TOAST_ID.TX_FAILED_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_FAILED_MSG],
  type: "error" as ToastType,
};

export const TOAST_TX_EXECUTED = {
  key: TOAST_ID.TX_EXECUTED_MSG,
  message: TOAST_MESSAGES[TOAST_ID.TX_EXECUTED_MSG],
  type: "success" as ToastType,
};

type TX_TOASTS_ID =
  | TOAST_ID.TX_EXECUTED_MSG
  | TOAST_ID.TX_FAILED_MSG
  | TOAST_ID.TX_PENDING_MSG
  | TOAST_ID.TX_STILL_PENDING_MSG
  | TOAST_ID.TX_WAITING_CONFIRMATION_MSG
  | TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG
  | TOAST_ID.TX_CONFIRMATION_FAILED_MSG;

export const TX_TOASTS: {
  [key in TX_TOASTS_ID]: { key: TOAST_ID; message: string; type: ToastType };
} = {
  [TOAST_ID.TX_WAITING_CONFIRMATION_MSG]: TOAST_TX_WAITING_CONFIRMATION,
  [TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG]: TOAST_TX_CONFIRMATION_EXECUTED,
  [TOAST_ID.TX_CONFIRMATION_FAILED_MSG]: TOAST_TX_CONFIRMATION_FAILED,
  [TOAST_ID.TX_PENDING_MSG]: TOAST_TX_PENDING,
  [TOAST_ID.TX_STILL_PENDING_MSG]: TOAST_TX_STILL_PENDING,
  [TOAST_ID.TX_EXECUTED_MSG]: TOAST_TX_EXECUTED,
  [TOAST_ID.TX_FAILED_MSG]: TOAST_TX_FAILED,
};
