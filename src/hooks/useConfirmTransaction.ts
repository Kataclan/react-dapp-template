import { noop } from "lodash";
import { useNotifications } from "contexts/notifications";
import useSetState from "hooks/useSetState";
import { TOAST_MESSAGES } from "config/constants/toasts";
import { TOAST_ID } from "types/toasts";
import {
  TOAST_TX_CONFIRMATION_EXECUTED,
  TOAST_TX_CONFIRMATION_FAILED,
  TOAST_TX_FAILED,
  TOAST_TX_PENDING,
  TOAST_TX_WAITING_CONFIRMATION,
} from "contexts/notifications/notificationBuilder";
import { ethers } from "ethers";

type Status =
  | "idle"
  | "confirming"
  | "pending"
  | "still-pending"
  | "success"
  | "fail";

interface State {
  status: Status;
  errorMsg?: string;
}

const initialState: State = {
  status: "idle",
};

interface ConfirmTransaction {
  contractMethod: () => Promise<any>;
  onConfirmWaiting?: () => void;
  onConfirmRejected?: () => void;
  onConfirmed?: () => void;
  onExecuted?: () => void;
  onExecutionFailed?: () => void;
  waitingConfirmationMessage?: string;
  confirmedMessage?: string;
  pendingMessage?: string;
  stillPendingMessage?: string;
  executedSuccessMessage?: string;
  errorConfirmingMessage?: string;
  errorExecutingMessage?: string;
}

const useTransactionLifecycle = ({
  contractMethod,
  onConfirmWaiting = noop,
  onConfirmRejected = noop,
  onConfirmed = noop,
  onExecuted = noop,
  onExecutionFailed = noop,
  waitingConfirmationMessage = TOAST_MESSAGES[
    TOAST_ID.TX_WAITING_CONFIRMATION_MSG
  ],
  confirmedMessage = TOAST_MESSAGES[TOAST_ID.TX_CONFIRMATION_EXECUTED_MSG],
  pendingMessage = TOAST_MESSAGES[TOAST_ID.TX_PENDING_MSG],
  stillPendingMessage = TOAST_MESSAGES[TOAST_ID.TX_STILL_PENDING_MSG],
  executedSuccessMessage = TOAST_MESSAGES[TOAST_ID.TX_EXECUTED_MSG],
  errorExecutingMessage = TOAST_MESSAGES[TOAST_ID.TX_FAILED_MSG],
  errorConfirmingMessage = TOAST_MESSAGES[TOAST_ID.TX_CONFIRMATION_FAILED_MSG],
}: ConfirmTransaction): { status: Status; execute: () => void } => {
  const [state, dispatch] = useSetState<State>(initialState);
  const { enqueueToast, enqueueAndRemove, removeToast } = useNotifications();

  return {
    status: state.status,
    execute: () => {
      // Show waiting confirmation
      enqueueToast({
        ...TOAST_TX_WAITING_CONFIRMATION,
        message: waitingConfirmationMessage,
      });
      // Call waiting callback
      onConfirmWaiting();
      // Call contract method
      contractMethod()
        // If confirmed
        .then(async (tx: any) => {
          // Show confirmation message and hide confirming
          enqueueAndRemove(
            {
              ...TOAST_TX_CONFIRMATION_EXECUTED,
              message: confirmedMessage,
            },
            TOAST_ID.TX_WAITING_CONFIRMATION_MSG
          );
          // Call confirmed callback
          onConfirmed();
          // Show tx pending message
          enqueueToast({
            ...TOAST_TX_PENDING,
            message: pendingMessage,
          });
          // Get tx receipt
          const receipt = await tx.wait();
          console.log("TX RECEIPT:", receipt);
          // If status === OK enqueue confirmation executed
          if (receipt.status) {
            enqueueAndRemove(
              {
                ...TOAST_TX_CONFIRMATION_EXECUTED,
                message: executedSuccessMessage,
              },
              TOAST_ID.TX_PENDING_MSG
            );
            onExecuted();
          } else {
            enqueueAndRemove(
              {
                ...TOAST_TX_FAILED,
                message: errorExecutingMessage,
              },
              TOAST_ID.TX_PENDING_MSG
            );
            onExecutionFailed();
          }
        })
        // Users rejects the
        .catch(() => {
          enqueueAndRemove(
            {
              ...TOAST_TX_CONFIRMATION_FAILED,
              message: errorConfirmingMessage,
            },
            TOAST_ID.TX_WAITING_CONFIRMATION_MSG
          );
          onConfirmRejected();
        });
    },
  };
};

export default useTransactionLifecycle;
