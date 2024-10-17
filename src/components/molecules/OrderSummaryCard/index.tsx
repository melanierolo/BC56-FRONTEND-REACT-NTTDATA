import { FC } from "react";

import { Currency } from "@domain/interfaces/currency.interface";

import "./style.css";

interface OrderSummaryCardProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: Currency;
}

interface OrderItem {
  label: string;
  value: number;
}

const OrderSummaryCard: FC<OrderSummaryCardProps> = ({
  subtotal,
  tax,
  shipping,
  total,
  currency,
}) => {
  const orderData: OrderItem[] = [
    { label: "Subtotal", value: subtotal },
    { label: "Tax (IGV 18%)", value: tax },
    { label: "Shipping", value: shipping },
    { label: "Total", value: total },
  ];
  return (
    <div className="summary-card">
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[0].label}</span>
        <span className="summary-card__value">
          {`${currency.symbol} `}
          {orderData[0].value.toFixed(2)}
        </span>
      </div>
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[1].label}</span>
        <span className="summary-card__value">
          {`${currency.symbol} `}
          {orderData[1].value.toFixed(2)}
        </span>
      </div>
      <div className="summary-card__row">
        <span className="summary-card__label">{orderData[2].label}</span>
        <span className="summary-card__value">
          {`${currency.symbol} `}
          {orderData[2].value.toFixed(2)}
        </span>
      </div>
      <hr className="summary-card__hr"></hr>
      <div className="summary-card__row">
        <span className="summary-card__label-total">{orderData[3].label}</span>
        <span className="summary-card__value-total">
          {" "}
          {`${currency.code + " " + currency.symbol}`} {orderData[3].value.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
