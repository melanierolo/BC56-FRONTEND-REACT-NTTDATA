import { FC, InputHTMLAttributes } from "react";
import "./style.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  startIcon?: string;
  inputClassName?: string;
}

const TextInput: FC<TextInputProps> = ({
  placeholder,
  inputClassName,
  startIcon = "",
  ...inputProps
}) => {
  return (
    <div className="text-input">
      {startIcon && (
        <img className="text-input__start-icon" src={startIcon} alt="Facebook icon"></img>
      )}
      <input
        className={`text-input__input ${inputClassName}`}
        {...inputProps}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
