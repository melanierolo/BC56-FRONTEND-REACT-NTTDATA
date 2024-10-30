import { FC, MouseEvent, ReactNode } from "react";
import "./style.css";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  imageUrl?: string;
  children?: ReactNode;
  size?: "medium" | "full";
}

const Dialog: FC<DialogProps> = ({
  open,
  onClose,
  message,
  imageUrl,
  children,
  title,
  size = "full",
}) => {
  if (!open) return null;

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="dialog">
      <div className="dialog__overlay" onClick={onClose}></div>
      <div
        className={`dialog__content dialog__content--${size}`}
        role="dialog"
        onClick={handleContentClick}
      >
        {imageUrl && <img className="dialog__img" src={imageUrl} alt="dialog image" />}
        {title && <h3>{title}</h3>}
        <div className="dialog__message">{message}</div>
        {children && <div className="dialog__children">{children}</div>}
      </div>
    </div>
  );
};

export default Dialog;
