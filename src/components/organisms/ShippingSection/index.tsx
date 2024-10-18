import { FC } from "react";

import "./style.css";

import ShippingForm from "@components/organisms/ShippingForm";

const ShippingSection: FC = () => {
  return (
    <div className="shipping-section">
      <div>
        <h2 className="shipping-section__title">Shipping Information</h2>
        <p className="shipping-section__paragraph">
          Please fill out the form below to complete your purchase.
        </p>
      </div>
      <ShippingForm></ShippingForm>
    </div>
  );
};

export default ShippingSection;
