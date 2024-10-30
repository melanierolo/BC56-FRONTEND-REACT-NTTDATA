import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsPage from "./index";
import { CartContext, CartContextType } from "@root/contexts/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import { getProducts } from "@services/product.service";
import { getCategories } from "@services/category.service";
import { Product } from "@domain/interfaces/product.interface";
import { Category } from "@domain/interfaces/category.interface";
import { categoriesMock } from "@root/__mocks__/category.mock";
import { mockProducts } from "@root/__mocks__/product.mocks";

// Mock the imported services
jest.mock("@services/product.service");
jest.mock("@services/category.service");

// Mock the imported components
jest.mock("@components/organisms/SearchSection", () =>
  jest.fn(({ searchTerm, onChange }) => (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products"
      />
    </div>
  )),
);
jest.mock("@components/organisms/Container", () =>
  jest.fn(({ children }) => <div>{children}</div>),
);
jest.mock("@components/organisms/ProductList", () =>
  jest.fn(({ products, onAddToCart }) => (
    <div>
      {products.map((product: Product) => (
        <div key={product.id}>
          {product.title}
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )),
);
jest.mock("@components/organisms/FilterByCategorySection", () =>
  jest.fn(({ options, onCategoryChange, selectedCategory, totalProducts }) => (
    <div>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        {options.map((category: Category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <span>{totalProducts} products found</span>
    </div>
  )),
);
jest.mock("@components/molecules/NotFoundCard", () => jest.fn(() => <div>No products found</div>));

describe("ProductsPage component", () => {
  const mockAddProduct = jest.fn();
  const mockCartContextValue: CartContextType = {
    addProduct: jest.fn(),
    decreaseProduct: jest.fn(),
    removeProduct: jest.fn(),
    cart: [],
    totalItems: 0,
  };
  beforeEach(() => {
    (getProducts as jest.Mock).mockResolvedValue(mockProducts);
    (getCategories as jest.Mock).mockResolvedValue(categoriesMock);
  });

  const renderComponent = () => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Router>
          <ProductsPage />
        </Router>
      </CartContext.Provider>,
    );
  };

  it("should render the ProductsPage component correctly", async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search products")).toBeInTheDocument();
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
      expect(screen.getByText("Calvin Klein CK One")).toBeInTheDocument();
      expect(screen.getByText("Beauty")).toBeInTheDocument();
      expect(screen.getByText("Fragrances")).toBeInTheDocument();
    });
  });

  it("should filter products by category", async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
      expect(screen.getByText("Calvin Klein CK One")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "beauty" } });

    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
      expect(screen.queryByText("Calvin Klein CK One")).not.toBeInTheDocument();
    });
  });

  it("should filter products by search term", async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
      expect(screen.getByText("Calvin Klein CK One")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Search products"), {
      target: { value: "Red Lipstick" },
    });

    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.queryByText("Red Nail Polish")).not.toBeInTheDocument();
      expect(screen.queryByText("Calvin Klein CK One")).not.toBeInTheDocument();
    });
  });

  it("should display 'No products found' when no products match the search criteria", async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText("Red Lipstick")).toBeInTheDocument();
      expect(screen.getByText("Red Nail Polish")).toBeInTheDocument();
      expect(screen.getByText("Calvin Klein CK One")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Search products"), {
      target: { value: "Non-existent product" },
    });

    await waitFor(() => {
      expect(screen.getByText("No products found")).toBeInTheDocument();
    });
  });
});
