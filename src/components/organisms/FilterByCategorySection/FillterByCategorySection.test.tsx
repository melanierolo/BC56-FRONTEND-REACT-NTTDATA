import { render, screen, fireEvent } from "@testing-library/react";
import FilterByCategorySection from "./index";

const mockOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "books", label: "Books" },
  { value: "clothing", label: "Clothing" },
];

const mockOnCategoryChange = jest.fn();

describe("FilterByCategorySection component", () => {
  const renderComponent = (selectedCategory: string, totalProducts: number) =>
    render(
      <FilterByCategorySection
        options={mockOptions}
        onCategoryChange={mockOnCategoryChange}
        selectedCategory={selectedCategory}
        totalProducts={totalProducts}
      />,
    );

  it("should render the component with initial values", () => {
    renderComponent("electronics", 100);

    expect(screen.getByText("Search Result:")).toBeInTheDocument();
    expect(screen.getByText("100 products")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter by:")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Electronics")).toBeInTheDocument();
  });

  it("should call onCategoryChange when a new category is selected", () => {
    renderComponent("electronics", 100);

    const selectElement = screen.getByLabelText("Filter by:");
    fireEvent.change(selectElement, { target: { value: "books" } });

    expect(mockOnCategoryChange).toHaveBeenCalledWith("books");
  });

  it("should display the correct number of products", () => {
    renderComponent("electronics", 50);

    expect(screen.getByText("50 products")).toBeInTheDocument();
  });
});
