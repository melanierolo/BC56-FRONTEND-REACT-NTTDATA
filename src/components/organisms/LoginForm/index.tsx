import { FC } from "react";
import { Formik, Form } from "formik";

import TextInput from "@components/atoms/TextInput";
import Button from "@components/atoms/Button";

import { isValidUsername, isValidPassword } from "@root/utils/validation.utils";

import "./style.css";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => Promise<void>;
  onForgotPassword: () => void;
}

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit, onForgotPassword }) => {
  const validate = (values: typeof initialValues) => {
    const errors: Partial<typeof initialValues> = {};

    if (!values.username.trim()) {
      errors.username = "Username is required";
    } else if (!isValidUsername(values.username)) {
      errors.username = "Invalid username format";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (!isValidPassword(values.password)) {
      errors.password = "Invalid password format";
    }
    return errors;
  };

  const handleSubmit = async (values: FormValues) => {
    await onSubmit(values.username, values.password);
  };

  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
      {({ handleChange, setFieldValue, errors, touched }) => (
        <Form className="login-form">
          <TextInput
            label="Username"
            name="username"
            type="username"
            placeholder="Enter your username"
            hasError={!!(errors.username && touched.username)}
            errorMessage={errors.username}
            onChange={(e) => {
              handleChange(e);
              setFieldValue("username", e.target.value);
            }}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            hasError={!!(errors.password && touched.password)}
            errorMessage={errors.password}
            onChange={(e) => {
              handleChange(e);
              setFieldValue("password", e.target.value);
            }}
          />
          <div className="login-form__actions">
            <div className="login-form__btn-forgot">
              <Button
                color="link"
                size="auto"
                children="Forgot password?"
                type="button"
                onClick={onForgotPassword}
              />
            </div>
            <Button
              color="primary"
              size="medium"
              fullWidth={true}
              type="submit"
              children="Log In"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
