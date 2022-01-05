import { TOAST_ID } from "types/toasts";

export const TOAST_MESSAGES: { [key in TOAST_ID]: string } = {
  [TOAST_ID.DEFAULT_ERROR_MESSAGE]: "Something went wrong",
  // Wallet Connection
  [TOAST_ID.EMPTY_WALLET_ERROR]:
    "We can't find any wallet installed in your browser. Please, consider install MetaMask",
  [TOAST_ID.UNLOCK_WALLET_MSG]: "Unlock your wallet to connect",
  [TOAST_ID.CONNECT_WALLET_ERROR_MSG]:
    "An error has occurred when trying to connect to your wallet",
  [TOAST_ID.SWITCH_CHAIN_MSG]: "Please, switch the chain in your wallet",
  [TOAST_ID.SWITCH_CHAIN_REJECTED_MSG]:
    "Please, change the chain in your wallet",
  [TOAST_ID.SWITCH_CHAIN_ERROR_MSG]: "Error switching chain",
  [TOAST_ID.INVALID_CHAIN_ERROR_MSG]:
    "Your wallet is connected to a wrong chain",
  [TOAST_ID.CHANGE_CHAIN_ERROR_MSG]:
    "Failed when trying to change chain in your wallet",

  // Regular/Custom Transactions
  [TOAST_ID.SIGN_TX_MSG]: "Please sign the transaction",

  [TOAST_ID.TX_REJECTED_MSG]: "Transaction rejected",

  [TOAST_ID.TX_EXECUTED_MSG]: "Transaction successfully executed",

  [TOAST_ID.TX_CANCELLATION_EXECUTED_MSG]: "Rejection successfully submitted",

  [TOAST_ID.TX_FAILED_MSG]: "Transaction failed",

  [TOAST_ID.TX_PENDING_MSG]: "Transaction pending",

  [TOAST_ID.TX_STILL_PENDING_MSG]:
    "Transaction still pending. Consider resubmitting with a higher gas price.",

  [TOAST_ID.TX_WAITING_CONFIRMATION_MSG]:
    "A transaction requires your confirmation",

  [TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG]:
    "Confirmation transaction was successful",

  [TOAST_ID.TX_CONFIRMATION_FAILED_MSG]: "Confirmation transaction failed",
};
