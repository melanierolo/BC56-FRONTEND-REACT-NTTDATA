import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartWidget from "./index";
import { CartContext, CartContextType } from "@root/contexts/CartContext";
import shoppingCartIcon from "@assets/icons/shopping-cart-icon.svg";

// Mock the svg import
jest.mock("@assets/icons/shopping-cart-icon.svg", () => "shopping-cart-icon.svg");

describe("CartWidget component", () => {
  const mockCartContextValue: CartContextType = {
    addProduct: jest.fn(),
    decreaseProduct: jest.fn(),
    removeProduct: jest.fn(),
    cart: [],
    totalItems: 5,
  };

  const renderComponent = () => {
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <CartWidget />
      </CartContext.Provider>,
    );
  };

  it("should render the CartWidget component correctly", () => {
    renderComponent();

    expect(screen.getByAltText("icon shopping cart")).toBeInTheDocument();
    expect(screen.getByAltText("icon shopping cart")).toHaveAttribute("src", shoppingCartIcon);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should display the correct number of items in the cart", () => {
    renderComponent();

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
