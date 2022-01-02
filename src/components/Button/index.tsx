import { ButtonHTMLAttributes, FC, ReactElement, ReactText } from "react";
import classNames from "utils/classname";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactText | ReactElement;
  classes?: string;
  disabled?: boolean;
}

const PRIMARY_VARIANT_BASE_CLASSES =
  "px-6 py-2.5 border rounded shadow-sm text-white";
const PRIMARY_VARIANT_DISABLED_CLASSES = "bg-gray-300";
const PRIMARY_VARIANT_NOT_DISABLED_CLASSES =
  "bg-purple-400 hover:bg-purple-500 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 active:border-purple-200";

const TERTIARY_VARIANT_BASE_CLASSES = "bg-transparent";
const TERTIARY_VARIANT_DISABLED_CLASSES = "text-gray-300";
const TERTIARY_VARIANT_NOT_DISABLED_CLASSES =
  "text-purple-400 hover:text-purple-500";

const Button: FC<PropsType> = ({
  variant = "primary",
  type = "button",
  children,
  disabled,
  classes = "",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={classNames(
        classes,
        "inline-flex items-center border-transparent focus:outline-none",
        disabled
          ? "cursor-not-allowed " +
              (variant === "primary"
                ? PRIMARY_VARIANT_DISABLED_CLASSES
                : TERTIARY_VARIANT_DISABLED_CLASSES)
          : variant === "primary"
          ? PRIMARY_VARIANT_NOT_DISABLED_CLASSES
          : TERTIARY_VARIANT_NOT_DISABLED_CLASSES,
        variant === "primary"
          ? PRIMARY_VARIANT_BASE_CLASSES
          : TERTIARY_VARIANT_BASE_CLASSES
      )}
    >
      {children}
    </button>
  );
};

export default Button;
