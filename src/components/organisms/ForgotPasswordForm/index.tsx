import { FC } from "react";
import { Formik, Form } from "formik";

import TextInput from "@components/atoms/TextInput";
import Button from "@components/atoms/Button";

import { isValidEmail } from "@root/utils/validation.utils";

import "./style.css";

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => Promise<void>;
  onCancel: () => void;
}

interface FormValues {
  email: string;
}

const initialValues: FormValues = {
  email: "",
};

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onSubmit, onCancel }) => {
  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const handleSubmit = async (values: FormValues) => {
    await onSubmit(values.email);
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {({ handleChange, setFieldValue, errors, touched }) => (
        <Form className="forgot-password">
          <TextInput
            name="email"
            placeholder="Enter your email"
            hasError={!!(errors.email && touched.email)}
            errorMessage={errors.email}
            onChange={(e) => {
              handleChange(e);
              setFieldValue("email", e.target.value);
            }}
          />
          <div className="forgot-password__buttons">
            <Button color="primary" size="medium" type="submit" children="Send" />
            <Button
              color="secondary"
              size="medium"
              type="button"
              onClick={onCancel}
              children="Cancel"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
