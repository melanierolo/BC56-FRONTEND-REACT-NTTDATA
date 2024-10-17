import { FC } from "react";

import { USD_CURRENCY } from "@domain/constants/currencies.constants";
import { SALES_TAX } from "@domain/constants/taxes.constants";

import "./style.css";

interface OrderSummaryCardProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

interface OrderItem {
  label: string;
  value: number;
}

const OrderSummaryCard: FC<OrderSummaryCardProps> = ({ subtotal, tax, shipping, total }) => {
  const orderData: OrderItem[] = [
    { label: "Subtotal", value: subtotal },
    { label: `Tax (${SALES_TAX.name} ${SALES_TAX.rate}%)`, value: tax },
    { label: "Shipping", value: shipping },
    { label: "Total", value: total },
  ];
  return (
    <div className="summary-card">
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[0].label}</span>
        <span className="summary-card__value">
          {`${USD_CURRENCY.symbol} `}
          {orderData[0].value.toFixed(2)}
        </span>
      </div>
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[1].label}</span>
        <span className="summary-card__value">
          {`${USD_CURRENCY.symbol} `}
          {orderData[1].value.toFixed(2)}
        </span>
      </div>
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[2].label}</span>
        <span className="summary-card__value">
          {`${USD_CURRENCY.symbol} `}
          {orderData[2].value.toFixed(2)}
        </span>
      </div>
      <hr className="summary-card__hr"></hr>
      <div className="summary-card__row">
        <span className="summary-card__label-total">{orderData[3].label}</span>
        <span className="summary-card__value-total">
          {" "}
          {`${USD_CURRENCY.code + " " + USD_CURRENCY.symbol}`} {orderData[3].value.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
