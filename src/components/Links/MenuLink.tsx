import { FC } from "react";

import classname from "utils/classname";

import { LinkProps } from "./types";

import { RouterLink } from ".";

const MenuLink: FC<LinkProps> = ({
  children,
  to,
  external,
  className,
  active,
  disabled,
}) => (
  <RouterLink
    to={to}
    active={active}
    disabled={disabled}
    className={classname(className, "hover:bg-violet-300")}
    target={external && "_blank"}
  >
    {children}
  </RouterLink>
);

export default MenuLink;
