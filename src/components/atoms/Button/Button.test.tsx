import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./index";

describe("Button component", () => {
  it("should render correctly when no props are provided", () => {
    render(<Button children="Click a button" />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Click a button/i);
  });

  it("should render as full width when the fullWidth prop is true", () => {
    render(<Button children="Full width Button" fullWidth />);

    const buttonElement = screen.getByRole("button", { name: /full width button/i });
    expect(buttonElement).toHaveClass("btn--full-width");
  });

  it("should call the onClick event handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} children="Click Me" />);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when the disabled prop is true", () => {
    render(<Button disabled children="Disabled Button" />);

    const buttonElement = screen.getByRole("button", { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();

    const handleClick = jest.fn();
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
