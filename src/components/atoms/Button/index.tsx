import { ButtonHTMLAttributes, FC } from "react";
import "./style.css";

export type ColorType = "primary" | "secondary" | "none";
export type SizeType = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorType;
  size?: SizeType;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    color = "primary",
    size = "small",
    disabled = false,
    fullWidth = false,
    children,
    ...extra
  } = props;
  const colors = { primary: "btn--primary", secondary: "btn--secondary", none: "btn--none" };

  const sizes = {
    small: "btn--small",
    medium: "btn--medium",
    large: "btn--large",
  };

  return (
    <button
      className={`btn ${colors[color]} ${sizes[size]} ${fullWidth ? "btn--full-width" : ""} ${disabled ? "btn-disabled" : ""}`}
      {...extra}
    >
      {children}
    </button>
  );
};

export default Button;
