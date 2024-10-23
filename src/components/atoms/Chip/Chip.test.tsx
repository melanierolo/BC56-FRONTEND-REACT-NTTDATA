import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chip from "./index";

describe("Chip component", () => {
  it("should render the component with the correct label", () => {
    const label = "Test Label";
    render(<Chip label={label} />);

    const chipLabel = screen.getByText("Test Label");
    expect(chipLabel).toBeInTheDocument();
    expect(chipLabel).toHaveTextContent(label);
  });
});
