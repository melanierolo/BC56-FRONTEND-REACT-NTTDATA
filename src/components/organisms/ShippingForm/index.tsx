import { ChangeEvent, FC, FormEvent } from "react";

import { useState } from "react";
import useDistricts from "@root/hooks/useDistricts";

import TextInput from "@components/atoms/TextInput";
import Button from "@components/atoms/Button";
import Select from "@components/atoms/Select";

import {
  isValidAddress,
  isValidPersonName,
  isValidPhone,
  isValidReference,
} from "@root/helpers/validation.helpers";

import "./style.css";

const ShippingForm: FC = () => {
  const districts = useDistricts();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const { firstName, lastName, district, address, reference, phone } = formData;

    if (!firstName) {
      newErrors.firstName = "*required";
    } else if (!isValidPersonName(firstName)) {
      newErrors.firstName = "Enter a valid first name";
    }

    if (!lastName) {
      newErrors.lastName = "*required";
    } else if (!isValidPersonName(lastName)) {
      newErrors.lastName = "Enter a valid last name";
    }

    if (!district) {
      newErrors.district = "*required";
    }

    if (!address) {
      newErrors.address = "*required";
    } else if (!isValidAddress(address)) {
      newErrors.address = "Enter a valid address";
    }

    if (!reference) {
      newErrors.reference = "*required";
    } else if (!isValidReference(reference)) {
      newErrors.reference = "Enter a valid reference";
    }

    if (!phone) {
      newErrors.phone = "*required";
    } else if (!isValidPhone(phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    console.log("errors", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    alert("Your purchase was successful");
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      district: "",
      address: "",
      reference: "",
      phone: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form">
      <TextInput
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        hasError={!!errors.firstName}
        errorMessage={errors.firstName}
        placeholder="Joe"
      ></TextInput>
      <TextInput
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        hasError={!!errors.lastName}
        errorMessage={errors.lastName}
        placeholder="Doe"
      ></TextInput>
      <TextInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        hasError={!!errors.address}
        errorMessage={errors.address}
        placeholder="123 Main St"
      ></TextInput>
      <TextInput
        label="Reference"
        name="reference"
        value={formData.reference}
        onChange={handleInputChange}
        hasError={!!errors.reference}
        errorMessage={errors.reference}
        placeholder="123 Main St"
      ></TextInput>
      <Select
        label="District"
        options={districts}
        onChange={handleInputChange}
        name="district"
      ></Select>
      <TextInput
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        hasError={!!errors.phone}
        errorMessage={errors.phone}
        placeholder="912345678"
        type="number"
      ></TextInput>
      <Button color="secondary" size="medium" fullWidth={true} type="submit">
        Purchase
      </Button>
    </form>
  );
};
export default ShippingForm;
