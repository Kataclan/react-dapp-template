import React from "react";
import Button from "ui-kit/components/Button";
import DialogComponent from "./DialogComponent";
import { DialogProps } from "./types";
import useDialog from "./useDialog";

export default {
  title: "Widgets/Dialog",
  component: DialogComponent,
  argTypes: {},
};

const CustomDialog: React.FC<DialogProps> = ({ ...props }) => (
  <DialogComponent {...props} />
);

export const Default: React.FC = () => {
  const [onOpen] = useDialog(
    <CustomDialog title="Dialog preview" />,
    false,
    "dialog1"
  );
  const [onOpen2] = useDialog(
    <CustomDialog
      title="You can't close this dialog"
      closeOnOverlayClick={false}
    />,
    false,
    "dialog2"
  );
  return (
    <div className="flex space-x-4">
      <Button onClick={onOpen}>DEFAULT</Button>
      <Button onClick={onOpen2}>Overlay cant close</Button>
    </div>
  );
};
