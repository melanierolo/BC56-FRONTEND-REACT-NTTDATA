import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./index";
import { mockProduct } from "@root/__mocks__/product.mocks";
import { USD_CURRENCY } from "@root/domain/constants/currencies.constants";

describe("ProductCard component", () => {
  const mockOnAddToCart = jest.fn();

  const renderComponent = () =>
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);

  it("should render product details correctly", () => {
    renderComponent();

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${USD_CURRENCY.code} ${USD_CURRENCY.symbol} ${mockProduct.price.toFixed(2)}`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText(`products image - ${mockProduct.title}`)).toBeInTheDocument();
    mockProduct.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("should call onAddToCart with correct arguments when 'Add to Cart' button is clicked", () => {
    renderComponent();

    const addButton = screen.getByRole("button", { name: /Add to Cart/i });
    fireEvent.click(addButton);

    expect(mockOnAddToCart).toHaveBeenCalledWith(mockProduct, 1);
  });
});
