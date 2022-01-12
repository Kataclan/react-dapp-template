import { ReactElement } from "react";

export type Handler = () => void;

export type DialogAction = {
  item: string | ReactElement;
  action: Handler;
};

export type DialogProps = {
  open?: boolean;
  title: string;

  description?: string;
  actions?: ReactElement[];

  closeOnOverlayClick?: boolean;
  containerClasses?: string;
  headerImage?: ReactElement | string;
  minWidth?: string;

  onClose?: () => void;
  onBack?: () => void;
};
