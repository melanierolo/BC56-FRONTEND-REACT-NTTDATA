import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./index";

describe("TextInput Component", () => {
  it("should render correctly even without the optional startIcon prop", () => {
    render(<TextInput placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");

    expect(input).toBeInTheDocument();
    expect(screen.queryByAltText("icon")).not.toBeInTheDocument();
  });

  it("should not display an error message unless hasError is true", () => {
    render(<TextInput placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "valid input" } });

    const errorMessage = screen.queryByText("This field is required");

    expect(errorMessage).toBeNull();
  });

  it("should only trigger onPressKeyIntro when the Enter key is pressed", () => {
    const mockOnPressKeyIntro = jest.fn();
    render(<TextInput placeholder="Enter text" onPressKeyIntro={mockOnPressKeyIntro} />);

    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    expect(mockOnPressKeyIntro).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(input, { key: "a", code: "KeyA" });

    expect(mockOnPressKeyIntro).toHaveBeenCalledTimes(1);
  });

  it("should have an accesible label", () => {
    render(<TextInput placeholder="Enter text" aria-label="Input field" />);
    const input = screen.getByLabelText("Input field");
    expect(input).toBeInTheDocument();
  });
});
