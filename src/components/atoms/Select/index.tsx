import React, { ChangeEvent, FC, SelectHTMLAttributes } from "react";

import "./style.css";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  id: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  id = "some-select",
  label,
  options,
  onChange,
  ...selectProps
}) => {
  return (
    <div className="select">
      {label && (
        <label htmlFor={`${id}-select`} className="select-label">
          {label}
        </label>
      )}
      <div className="select-wrapper">
        <select className="select-input" id={`${id}-select`} onChange={onChange} {...selectProps}>
          <option value="">Choose an option</option>
          {options?.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
