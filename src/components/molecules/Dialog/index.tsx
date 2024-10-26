import { FC, MouseEvent } from "react";
import "./style.css";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
  imageUrl?: string;
}

const Dialog: FC<DialogProps> = ({ open, onClose, message, imageUrl }) => {
  if (!open) return null;

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="dialog">
      <div className="dialog__overlay" onClick={onClose}></div>
      <div className="dialog__content" role="dialog" onClick={handleContentClick}>
        {imageUrl && <img className="dialog__img" src={imageUrl} alt="dialog image" />}
        <div className="dialog__message">{message}</div>
      </div>
    </div>
  );
};

export default Dialog;
