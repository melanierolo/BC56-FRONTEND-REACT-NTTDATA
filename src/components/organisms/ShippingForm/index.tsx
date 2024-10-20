import { ChangeEvent, FC } from "react";

import useForm from "@root/hooks/useForm";
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
  const initialValues = {
    firstName: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  };

  const validators = {
    firstName: (value: string) => {
      if (!value) return "*required";
      if (!isValidPersonName(value)) return "Enter a valid first name";
      return "";
    },
    lastName: (value: string) => {
      if (!value) return "*required";
      if (!isValidPersonName(value)) return "Enter a valid last name";
      return "";
    },
    district: (value: string) => {
      return value ? "" : "*required";
    },
    address: (value: string) => {
      if (!value) return "*required";
      if (!isValidAddress(value)) return "Enter a valid address";
      return "";
    },
    reference: (value: string) => {
      if (!value) return "*required";
      if (!isValidReference(value)) return "Enter a valid reference";
      return "";
    },
    phone: (value: string) => {
      if (!value) return "*required";
      if (!isValidPhone(value)) return "Enter a valid phone number";
      return "";
    },
  };

  const { formData, errors, handleInputChange, handleSubmit } = useForm(initialValues, validators);

  const handleFormSubmit = () => {
    alert("Your purchase was successful");
    console.log("shipping information", formData);

    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
      handleInputChange(key, "");
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, handleFormSubmit)} className="shipping-form">
      <TextInput
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("firstName", e.target.value)
        }
        hasError={!!errors.firstName}
        errorMessage={errors.firstName}
        placeholder="Joe"
      ></TextInput>
      <TextInput
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("lastName", e.target.value)
        }
        hasError={!!errors.lastName}
        errorMessage={errors.lastName}
        placeholder="Doe"
      ></TextInput>
      <TextInput
        label="Address"
        name="address"
        value={formData.address}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("address", e.target.value)
        }
        hasError={!!errors.address}
        errorMessage={errors.address}
        placeholder="123 Main St"
      ></TextInput>
      <TextInput
        label="Reference"
        name="reference"
        value={formData.reference}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange("reference", e.target.value)
        }
        hasError={!!errors.reference}
        errorMessage={errors.reference}
        placeholder="Near the mall"
      ></TextInput>
      <Select
        label="District"
        options={districts}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleInputChange("district", e.target.value)
        }
        name="district"
      ></Select>
      <TextInput
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
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
