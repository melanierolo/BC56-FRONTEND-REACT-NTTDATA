import { FC } from "react";

import Button from "@components/atoms/Button";

import plusIcon from "@assets/icons/plus-icon.svg";
import minusIcon from "@assets/icons/minus-icon.svg";

import "./style.css";

interface QuantityStepper {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max: number;
}

const QuantityStepper: FC<QuantityStepper> = ({
  value,
  onIncrease,
  onDecrease,
  min = 0,
  max = 100,
}) => {
  return (
    <div className="quantity-stepper">
      <div className="quantity-stepper__btn">
        <Button color="secondary" onClick={onDecrease} fullWidth={true} disabled={value <= min}>
          <img src={minusIcon} alt="minus icon" />
        </Button>
      </div>
      <span className="quantity-stepper__value">{value}</span>
      <div className="quantity-stepper__btn">
        <Button color="secondary" fullWidth={true} onClick={onIncrease} disabled={value >= max}>
          <img src={plusIcon} alt="plus icon" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityStepper;
