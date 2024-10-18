import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { useRef } from "react";
import "./style.css";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  label?: string;
  height?: "small" | "medium";
  placeholder: string;
  required?: boolean;
  startIcon?: string;
  inputClassName?: string;
  isSuccess?: boolean;
  successMessage?: string;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressKeyIntro?: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({
  children,
  label,
  height = "small",
  placeholder,
  required,
  inputClassName,
  startIcon = "",
  isSuccess = false,
  hasError = false,
  errorMessage,
  onChange,
  onPressKeyIntro = () => {},
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const heightInput = { small: "text-input__input--small", medium: "text-input__input--medium" };

  const getTextInputStyles = (): string => {
    let textInputClasses = "";
    textInputClasses += startIcon ? "text-input__input--icon " : "";
    if (hasError) {
      textInputClasses += "text-input__input--error";
    } else {
      textInputClasses += "text-input__input--default";
    }

    return textInputClasses;
  };

  const inputHeight = heightInput[height];
  const inputStyles = getTextInputStyles();

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputRef.current) {
        const inputValue = inputRef.current.value;
        onPressKeyIntro(inputValue);
      }
    }
  };

  return (
    <div className="text-input">
      {label && <label className="text-input__label">{label}</label>}
      <div className="text-input__container">
        {startIcon && <img className="text-input__start-icon" src={startIcon} alt="icon"></img>}
        <input
          className={`text-input__input ${inputClassName ?? ""} ${inputStyles} ${inputHeight} `}
          {...inputProps}
          required={required}
          placeholder={placeholder}
          ref={inputRef}
          onKeyUp={handleKeyUp}
          onChange={onChange}
        />
      </div>
      {hasError && <span className="text-input__error-text">{errorMessage}</span>}
      {children && <span className="text-input__helper-text">{children}</span>}
    </div>
  );
};

export default TextInput;
