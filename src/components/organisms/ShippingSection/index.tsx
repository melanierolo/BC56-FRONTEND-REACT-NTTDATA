import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dialog from "@components/molecules/Dialog";
import ShippingForm, { ShippingFormValues } from "@components/organisms/ShippingForm";

import iconSuccess from "@assets/icons/icon-success-circle-green.png";

import "./style.css";

const shippingSectionText = {
  title: "Shipping Information",
  paragraph: "Please fill out the form below to complete your purchase.",
};

const ShippingSection: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleFormSubmit = (formData: ShippingFormValues) => {
    console.log("shipping information", formData);
    setDialogOpen(true);
  };

  const navigate = useNavigate();

  const handleDialogClose = () => {
    setDialogOpen(false);
    navigate("/products");
  };

  return (
    <div className="shipping-section">
      <div>
        <h2 className="shipping-section__title">{shippingSectionText.title}</h2>
        <p className="shipping-section__paragraph">{shippingSectionText.paragraph}</p>
      </div>
      <ShippingForm onShippingSubmit={handleFormSubmit} />
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        imageUrl={iconSuccess}
        message="Your purchase was successful"
      />
    </div>
  );
};

export default ShippingSection;
