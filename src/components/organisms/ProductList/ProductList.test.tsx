import { render, screen } from "@testing-library/react";
import ProductList from "./index";
import { mockProducts } from "@root/__mocks__/product.mocks";

const mockOnAddToCart = jest.fn();

describe("ProductList component", () => {
  it("should render correctly with the provided products", () => {
    render(<ProductList products={mockProducts} onAddToCart={mockOnAddToCart} />);

    // Check for product titles
    expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
    expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
    expect(screen.getByText("Calvin Klein CK One")).toBeInTheDocument();
  });

  it("should call onAddToCart when Add to Cart button is clicked", () => {
    render(<ProductList products={mockProducts} onAddToCart={mockOnAddToCart} />);

    // Click the Add to Cart button for the first product
    screen.getAllByText("Add to Cart")[0].click();

    // Check if the mock function was called
    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProducts[0], 1);
  });
});
