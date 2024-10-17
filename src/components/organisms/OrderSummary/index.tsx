import { FC, useContext } from "react";

import { CartContext } from "@root/contexts/CartContext";

import OrderSummaryCard from "@components/molecules/OrderSummaryCard";

import { SALES_TAX } from "@domain/constants/taxes.constants";

import "./style.css";

const OrderSummary: FC = () => {
  const { totalItems, cart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantityOfItems, 0);
  const tax = (subtotal * SALES_TAX.rate) / 100;
  const shipping = 5.0;
  const total = subtotal + tax + shipping;

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
      ></OrderSummaryCard>
    </div>
  );
};

export default OrderSummary;
