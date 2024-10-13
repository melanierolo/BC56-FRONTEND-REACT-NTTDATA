import { FC, SelectHTMLAttributes } from "react";

import "./style.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
}

const Select: FC<SelectProps> = ({ id, label, options, ...selectProps }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select className="select-input" {...selectProps}>
          <option value="">Choose an option</option>
          {options?.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
