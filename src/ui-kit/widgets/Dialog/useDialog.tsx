import React, { useCallback, useContext, useEffect } from "react";
import get from "lodash/get";

import { Context } from "./DialogContext";
import { Handler } from "./types";

const useDialog = (
  dialog: React.ReactNode,
  updateOnPropsChange = true,
  dialogId = "defaultNodeId"
): [Handler, Handler] => {
  const {
    isOpen,
    nodeId,
    dialogNode,
    closeOnOverlayClick,
    setDialogNode,
    onOpen,
    onClose,
    setCloseOnOverlayClick,
  } = useContext(Context);
  const onOpenCallback = useCallback(() => {
    onOpen(dialog, dialogId);
  }, [dialog, dialogId, onOpen]);

  // Updates the "dialog" component if props are changed
  // Use carefully since it might result in unnecessary rerenders
  // Typically if dialog is staic there is no need for updates, use when you expect props to change
  useEffect(() => {
    // NodeId is needed in case there are 2 useDialog hooks on the same page and one has updateOnPropsChange
    if (updateOnPropsChange && isOpen && nodeId === dialogId) {
      const dialogProps = get(dialog, "props");
      const oldDialogProps = get(dialogNode, "props");
      // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
      // For example ConfirmSwapDialog in exchange has ~500 lines prop object that stringifies to same string
      // and online diff checker says both objects are identical but lodash isEqual thinks they are different
      // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
      // TODO: Find a good way to handle dialog updates, this whole flow is just backwards-compatible workaround,
      // would be great to simplify the logic here
      if (
        dialogProps &&
        oldDialogProps &&
        JSON.stringify(dialogProps) !== JSON.stringify(oldDialogProps)
      ) {
        setDialogNode(dialog);
      }
    }
  }, [
    updateOnPropsChange,
    nodeId,
    dialogId,
    isOpen,
    dialog,
    dialogNode,
    setDialogNode,
  ]);

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onOpenCallback, onClose];
};

export default useDialog;
