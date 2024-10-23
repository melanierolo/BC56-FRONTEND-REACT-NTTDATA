import { FormEvent, useState } from "react";

type Validator<T> = (value: T[keyof T]) => string;

const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
  validators: { [K in keyof T]?: Validator<T> },
) => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});

  const handleInputChange = (name: keyof T, value: T[keyof T]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value !== "") {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [K in keyof T]?: string } = {};
    (Object.keys(validators) as Array<keyof T>).forEach((key) => {
      const error = validators[key]?.(formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, onSubmit: () => void) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    onSubmit();
  };

  return { formData, errors, handleInputChange, handleSubmit };
};

export default useForm;
