import { FC, PropsWithChildren } from "react";
import css from "./button.module.css";

interface PropsButton {
  onClick: () => void;
  id?: string;
  style?: "primary";
  type?: "button" | "reset" | "submit";
  size?: "large" | "small";
  className?: string;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<PropsButton>> = ({
  onClick,
  id,
  children,
  type,
  className,
  disabled,
  size,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      id={id}
      type={type}
      className={`${css.button} 
            ${style === "primary" && css.buttonPrimary}
            ${style === "primary" && disabled && css.buttonPrimaryDisabled}
            ${size === "large" && css.buttonLarge} 
            ${size === "small" && css.buttonSmall} 
            ${disabled && css.buttonDisabled} 
            ${className}`}
    >
      {children}
    </button>
  );
};
