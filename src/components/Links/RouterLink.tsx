import { isEmpty } from "lodash";
import { FC } from "react";
import { Link } from "react-router-dom";

import classname from "utils/classname";

import { LinkProps } from "./types";

const DEFAULT_ACTIVE_CLASSNAME = "text-violet-500";
const DEFAULT_DISABLED_CLASSNAME = "cursor-default opacity-75";

const RouterLink: FC<LinkProps> = ({
  children,
  to,
  className,
  active,
  activeClassname,
  disabled,
  disabledClassName,
}) => {
  return (
    <Link
      to={to}
      className={classname(
        "inline-flex items-center text-sm font-medium",
        active &&
          (!isEmpty(activeClassname)
            ? activeClassname
            : DEFAULT_ACTIVE_CLASSNAME),
        disabled &&
          (!isEmpty(disabledClassName)
            ? disabledClassName
            : DEFAULT_DISABLED_CLASSNAME),
        className
      )}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
