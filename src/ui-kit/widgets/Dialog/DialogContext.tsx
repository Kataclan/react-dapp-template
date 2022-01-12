import { cloneElement, createContext, isValidElement, useState } from "react";

import { Handler } from "./types";

interface DialogsContext {
  isOpen: boolean;
  nodeId: string;
  dialogNode: React.ReactNode;
  closeOnOverlayClick: boolean;
  setDialogNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  onOpen: (node: React.ReactNode, newNodeId: string) => void;
  onClose: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<DialogsContext>({
  isOpen: false,
  nodeId: "",
  dialogNode: null,
  closeOnOverlayClick: true,
  setDialogNode: () => null,
  onOpen: () => null,
  onClose: () => null,
  setCloseOnOverlayClick: () => true,
});

const DialogProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogNode, setDialogNode] = useState<React.ReactNode>();
  const [nodeId, setNodeId] = useState("");
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handleOpen = (node: React.ReactNode, newNodeId: string) => {
    setDialogNode(node);
    setIsOpen(true);
    setNodeId(newNodeId);
  };

  const handleClose = () => {
    setDialogNode(undefined);
    setIsOpen(false);
    setNodeId("");
  };

  return (
    <Context.Provider
      value={{
        isOpen,
        nodeId,
        dialogNode,
        closeOnOverlayClick,
        setDialogNode,
        onOpen: handleOpen,
        onClose: handleClose,
        setCloseOnOverlayClick,
      }}
    >
      {isValidElement(dialogNode) &&
        cloneElement(dialogNode, {
          open: isOpen,
          onClose: handleClose,
        })}
      {children}
    </Context.Provider>
  );
};

export default DialogProvider;
