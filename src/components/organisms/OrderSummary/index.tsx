import { FC, useContext } from "react";

import { CartContext } from "@root/contexts/CartContext";

import OrderSummaryCard from "@components/molecules/OrderSummaryCard";

import { Currency } from "@domain/interfaces/currency.interface";

import "./style.css";

const OrderSummary: FC = () => {
  const { totalItems, cart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantityOfItems, 0);
  const tax = subtotal * 0.18;
  const shipping = 5.0;
  const total = subtotal + tax + shipping;
  const currency: Currency = { name: "United States Dolar", code: "USD", symbol: "$" };

  return (
    <div className="order-summary">
      <div>
        <h2 className="order-summary__title">Order Summary</h2>
        <p className="order-summary__paragraph">You have {totalItems}</p>
      </div>
      <OrderSummaryCard
        subtotal={subtotal}
        tax={tax}
        shipping={shipping}
        total={total}
        currency={currency}
      ></OrderSummaryCard>
    </div>
  );
};

export default OrderSummary;
