import { render, screen, fireEvent } from "@testing-library/react";
import QuantityStepper from "./index";

// Mock the svg import
jest.mock("@assets/icons/plus-icon.svg", () => "plus-icon.svg");
jest.mock("@assets/icons/minus-icon.svg", () => "minus-icon.svg");

describe("QuantityStepper component", () => {
  const mockOnIncrease = jest.fn();
  const mockOnDecrease = jest.fn();

  const renderComponent = (value: number, min?: number, max?: number) =>
    render(
      <QuantityStepper
        value={value}
        onIncrease={mockOnIncrease}
        onDecrease={mockOnDecrease}
        min={min}
        max={max ?? 100}
      />,
    );

  it("should render the component with initial value", () => {
    renderComponent(5);

    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should call onIncrease when the increase button is clicked", () => {
    renderComponent(5);

    const increaseButton = screen.getByAltText("plus icon").closest("button");
    if (increaseButton) {
      fireEvent.click(increaseButton);
      expect(mockOnIncrease).toHaveBeenCalled();
    }
  });

  it("should call onDecrease when the decrease button is clicked", () => {
    renderComponent(5);

    const decreaseButton = screen.getByAltText("minus icon").closest("button");
    if (decreaseButton) {
      fireEvent.click(decreaseButton);
      expect(mockOnDecrease).toHaveBeenCalled();
    }
  });

  it("should disable the decrease button when value is less than or equal to min", () => {
    renderComponent(0, 0, 10);

    const decreaseButton = screen.getByAltText("minus icon").closest("button");
    if (decreaseButton) {
      expect(decreaseButton).toBeDisabled();
    }
  });

  it("should disable the increase button when value is greater than or equal to max", () => {
    renderComponent(10, 0, 10);

    const increaseButton = screen.getByAltText("plus icon").closest("button");
    if (increaseButton) {
      expect(increaseButton).toBeDisabled();
    }
  });
});
