import React, { ButtonHTMLAttributes, FC } from "react";
import "./style.css";

export type ColorType = "primary" | "secondary" | "none";
export type SizeType = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  size?: SizeType;
  fullWidth?: boolean;
}

const colors = { primary: "btn--primary", secondary: "btn--secondary", none: "btn--none" };

const sizes = {
  small: "btn--small",
  medium: "btn--medium",
  large: "btn--large",
};

const Button: FC<ButtonProps> = (props) => {
  const {
    color = "primary",
    size = "small",
    disabled = false,
    fullWidth = false,
    children = "button",
    ...extra
  } = props;

  return (
    <button
      className={`btn ${colors[color]} ${sizes[size]} ${fullWidth ? "btn--full-width" : ""} ${disabled ? "btn-disabled" : ""}`}
      disabled={disabled}
      {...extra}
    >
      {children}
    </button>
  );
};

export default Button;
