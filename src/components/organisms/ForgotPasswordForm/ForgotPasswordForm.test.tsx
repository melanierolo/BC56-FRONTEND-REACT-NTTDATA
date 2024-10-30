import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForgotPasswordForm from "./index";

describe("ForgotPasswordForm component", () => {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  const renderComponent = () => {
    render(<ForgotPasswordForm onSubmit={onSubmit} onCancel={onCancel} />);

    return {
      onSubmit,
      onCancel,
      emailInput: screen.getByPlaceholderText(/enter your email/i) as HTMLInputElement,
      submitButton: screen.getByRole("button", { name: /send/i }),
      cancelButton: screen.getByRole("button", { name: /cancel/i }),
    };
  };

  it("should render form fields", () => {
    const { emailInput, submitButton, cancelButton } = renderComponent();

    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should display an error message if the email field is left empty", async () => {
    const { submitButton } = renderComponent();

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });

  it("should show an error message for an invalid email format", async () => {
    const { emailInput, submitButton } = renderComponent();

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Invalid email format")).toBeInTheDocument();
    });
  });

  it("should call onSubmit with the email when the form is valid", async () => {
    const { emailInput, submitButton } = renderComponent();

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith("test@example.com");
    });
  });
});
