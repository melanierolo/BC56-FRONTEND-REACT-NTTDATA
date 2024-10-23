import React, { FC } from "react";
import "./style.css";

interface ChipProps {
  label: string;
}

const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <div className="chip">
      <span className=" chip__label">{label}</span>
    </div>
  );
};

export default Chip;
