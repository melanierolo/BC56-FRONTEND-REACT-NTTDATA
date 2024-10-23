import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./index";

describe("Select component", () => {
  const mockOptions = [
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
    { value: "mexico", label: "Mexico" },
  ];

  it("should render the select input and its label when provided", () => {
    render(<Select id="country-select" label="Select a Country" options={mockOptions} />);

    const labelElement = screen.getByText("Select a Country");
    const selectElement = screen.getByLabelText("Select a Country");

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });

  it("should render all provided options", async () => {
    render(<Select id="country-select" label="Select a Country" options={mockOptions} />);

    const optionsElements = await screen.findAllByRole("option");
    const optionsLabels = optionsElements.map((option) => option.textContent);
    expect(optionsLabels).toEqual(["Choose an option", "United States", "Canada", "Mexico"]);
  });

  it("should allow the user to select an option", () => {
    render(<Select id="country-select" label="Select a Country" options={mockOptions} />);

    const selectElement = screen.getByLabelText("Select a Country");
    fireEvent.change(selectElement, { target: { value: "canada" } });

    expect((selectElement as HTMLSelectElement).value).toBe("canada");
  });
});
