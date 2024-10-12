import { FC } from "react";
import "./style.css";

interface ChipProps {
  label: string;
}

const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <div className="chip">
      <p className=" chip__label">{label}</p>
    </div>
  );
};

export default Chip;
