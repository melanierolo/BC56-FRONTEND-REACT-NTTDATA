import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./index";

describe("LoginForm component", () => {
  const onSubmit = jest.fn();
  const onForgotPassword = jest.fn();

  const renderComponent = () => {
    render(<LoginForm onSubmit={onSubmit} onForgotPassword={onForgotPassword} />);

    return {
      onSubmit,
      onForgotPassword,
      usernameInput: screen.getByPlaceholderText(/enter your username/i) as HTMLInputElement,
      passwordInput: screen.getByPlaceholderText(/enter your password/i) as HTMLInputElement,
      submitButton: screen.getByRole("button", { name: /log in/i }),
      forgotPasswordButton: screen.getByRole("button", { name: /forgot password\?/i }),
    };
  };

  it("should render form fields", () => {
    const { usernameInput, passwordInput, submitButton, forgotPasswordButton } = renderComponent();

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(forgotPasswordButton).toBeInTheDocument();
  });

  it("should display an error message if required input fields are left empty", async () => {
    const { submitButton } = renderComponent();

    userEvent.click(submitButton);

    await waitFor(() => {
      const errorMessages = screen.getAllByText(/is required/i);
      expect(errorMessages).toHaveLength(2);
    });
  });

  it("should call onSubmit with form data when form is valid", async () => {
    const { usernameInput, passwordInput, submitButton } = renderComponent();

    fireEvent.change(usernameInput, { target: { value: "validUsername" } });
    fireEvent.change(passwordInput, { target: { value: "ValidPassword123" } });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith("validUsername", "ValidPassword123");
    });
  });
});
