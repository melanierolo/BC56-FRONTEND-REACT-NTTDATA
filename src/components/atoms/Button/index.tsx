import { ButtonHTMLAttributes, FC } from "react";
import "./style.css";

export type ColorType = "primary" | "secondary";
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
    fullWidth = false,
    children,
    ...extra
  } = props;
  const colors = { primary: "btn--primary", secondary: "btn--secondary" };
  const sizes = {
    small: "btn--small",
    medium: "btn--medium",
    large: "btn--large",
  };
  return (
    <button
      className={`btn ${colors[color]} ${sizes[size]} ${fullWidth ? "btn--full-width" : ""} `}
      {...extra}
    >
      {children}
    </button>
  );
};

export default Button;
