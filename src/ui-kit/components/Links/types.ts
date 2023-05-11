import { LinkProps as RouterLinkProps } from "react-router-dom";

export interface LinkProps extends RouterLinkProps {
  external?: string;
  className?: string;
  active?: boolean;
  activeClassname?: string;
  disabled?: boolean;
  disabledClassName?: string;
  visited?: boolean;
}
