import { createContext, useCallback, useContext } from "react";
import noop from "lodash/noop";
import useSetState from "utils/hooks/useSetState";
import { Toast, TOAST_ID } from "types/toasts";
import { Toaster, toast } from "react-hot-toast";

type ToastsDict = { [key: string]: Toast };

type NotificationsContextProps = {
  notifications: ToastsDict;
  removeToast: (key: TOAST_ID) => void;
  enqueueToast: (
    notification: Partial<Pick<Toast, "message" | "type" | "key">>
  ) => void;
  enqueueAndRemove: (
    notification: Partial<Pick<Toast, "message" | "type" | "key">>,
    key: TOAST_ID
  ) => void;
  closeToast: ({
    key,
    dismissAll,
  }: {
    key: string;
    dismissAll?: boolean;
  }) => void;
};

const defaultContextValue: NotificationsContextProps = {
  notifications: {},
  removeToast: noop,
  enqueueToast: noop,
  enqueueAndRemove: noop,
  closeToast: noop,
};

export const Notifications =
  createContext<NotificationsContextProps>(defaultContextValue);

export const NotificationsProvider: React.FC = ({ children }) => {
  const [notifications, setState] = useSetState<ToastsDict>({});

  const dismissAllNotifications = useCallback(() => {
    for (let key in notifications) {
      notifications[key].dismissed = true;
      toast.dismiss(key);
    }
    setState(notifications);
  }, [notifications]);

  const updateNotification = useCallback(
    (key: string, notification: Toast | undefined) => {
      if (notification && notifications[key]) {
        setState({
          ...notifications,
          [key]: notification,
        });
      }
    },
    [notifications]
  );

  const closeToast = useCallback(
    ({ key, dismissAll }: { key: string; dismissAll?: boolean }) => {
      if (dismissAll) {
        dismissAllNotifications();
      } else if (key && notifications[key]) {
        toast.dismiss(key);
        updateNotification(key, {
          ...notifications[key],
          dismissed: true,
        });
      }
    },
    [notifications]
  );

  const enqueueToast = (
    notification: Partial<Pick<Toast, "message" | "type" | "key">>
  ) => {
    const id = notification.key
      ? notification.key.toString()
      : (new Date().getTime() + Math.random()).toString();
    if (notification.message) {
      console.log("Add key: ", id);
      switch (notification.type) {
        case "error":
          toast.error(notification.message, {
            id,
          });
          break;
        case "success":
          toast.success(notification.message, { id });
          break;
        case "loading":
          toast.loading(notification.message, { id });
          break;
        default:
          toast.custom(notification.message, { id });
          break;
      }
    }
  };

  const removeToast = (key: TOAST_ID) => {
    console.log("dismiss", key);
    toast.dismiss(key.toString());
  };

  const enqueueAndRemove = (
    notification: Partial<Pick<Toast, "message" | "type" | "key">>,
    key: TOAST_ID
  ) => {
    enqueueToast(notification);
    removeToast(key);
  };

  return (
    <Notifications.Provider
      value={{
        notifications,
        enqueueToast,
        enqueueAndRemove,
        closeToast,
        removeToast,
      }}
    >
      <Toaster />
      {children}
    </Notifications.Provider>
  );
};

export const useNotifications = () => useContext(Notifications);
