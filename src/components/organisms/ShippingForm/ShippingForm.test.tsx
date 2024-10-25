import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShippingForm from ".";

describe("ShippingForm component", () => {
  const onShippingSubmit = jest.fn();
  const renderComponent = () => {
    render(<ShippingForm onShippingSubmit={onShippingSubmit} />);

    return {
      onShippingSubmit,
      waitForFormRender: () => screen.findByRole("form"),
      firstNameInput: screen.getByPlaceholderText(/joe/i) as HTMLInputElement,
      lastNameInput: screen.getByPlaceholderText(/doe/i) as HTMLInputElement,
      addressInput: screen.getByPlaceholderText(/123 main st/i) as HTMLInputElement,
      referenceInput: screen.getByPlaceholderText(/near the mall/i) as HTMLInputElement,
      districtSelect: screen.getByLabelText(/district/i) as HTMLSelectElement,
      phoneInput: screen.getByPlaceholderText(/912345678/i) as HTMLInputElement,
      submitButton: screen.getByRole("button", { name: /purchase/i }),
    };
  };

  it("should render form fields", () => {
    const {
      firstNameInput,
      lastNameInput,
      addressInput,
      referenceInput,
      districtSelect,
      phoneInput,
    } = renderComponent();

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(referenceInput).toBeInTheDocument();
    expect(districtSelect).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
  });

  it("should display an error message if required input fields are left empty", async () => {
    const { submitButton } = renderComponent();

    userEvent.click(submitButton);

    await waitFor(() => {
      const errorMessages = screen.getAllByText("*required");
      expect(errorMessages).toHaveLength(5);
    });
  });

  it("should show an error message for each field with invalid format", async () => {
    const {
      firstNameInput,
      lastNameInput,
      addressInput,
      referenceInput,
      phoneInput,
      submitButton,
    } = renderComponent();

    fireEvent.change(firstNameInput, { target: { value: 123 } });
    fireEvent.change(lastNameInput, { target: { value: 123 } });
    fireEvent.change(addressInput, { target: { value: "faf" } });
    fireEvent.change(referenceInput, { target: { value: "%%%" } });
    fireEvent.change(phoneInput, { target: { value: 989888999898 } });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Enter a valid first name")).toBeInTheDocument();
      expect(screen.getByText("Enter a valid last name")).toBeInTheDocument();
      expect(screen.getByText("Enter a valid address")).toBeInTheDocument();
      expect(screen.getByText("Enter a valid reference")).toBeInTheDocument();
      expect(screen.getByText("Enter a valid phone number")).toBeInTheDocument();
    });
  });

  it("should call onShippingSubmit with form data when form is valid", async () => {
    const {
      onShippingSubmit,
      firstNameInput,
      lastNameInput,
      addressInput,
      referenceInput,
      districtSelect,
      phoneInput,
      submitButton,
    } = renderComponent();

    // fill in the form with valid data
    fireEvent.change(firstNameInput, { target: { value: "Carlos" } });
    fireEvent.change(lastNameInput, { target: { value: "López" } });
    fireEvent.change(addressInput, { target: { value: "Calle falsa 123" } });
    fireEvent.change(referenceInput, { target: { value: "Cerca de la plaza" } });
    fireEvent.change(districtSelect, { target: { value: "surquillo" } });
    fireEvent.change(phoneInput, { target: { value: "912345678" } });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(onShippingSubmit).toHaveBeenCalledWith({
        firstName: "Carlos",
        lastName: "López",
        address: "Calle falsa 123",
        district: "surquillo",
        reference: "Cerca de la plaza",
        phone: "912345678",
      });
    });
  });
});
