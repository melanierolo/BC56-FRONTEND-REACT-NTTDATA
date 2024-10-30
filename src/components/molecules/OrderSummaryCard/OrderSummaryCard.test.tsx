import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderSummaryCard from "./index";
import { USD_CURRENCY } from "@domain/constants/currencies.constants";
import { SALES_TAX } from "@domain/constants/taxes.constants";

describe("OrderSummaryCard component", () => {
  const props = {
    subtotal: 100,
    tax: 10,
    shipping: 5,
    total: 115,
  };

  it("should render the OrderSummaryCard component correctly", () => {
    render(<OrderSummaryCard {...props} />);

    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText(`Tax (${SALES_TAX.name} ${SALES_TAX.rate}%)`)).toBeInTheDocument();
    expect(screen.getByText("Shipping")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();

    expect(screen.getByText(`${USD_CURRENCY.symbol} 100.00`)).toBeInTheDocument();
    expect(screen.getByText(`${USD_CURRENCY.symbol} 10.00`)).toBeInTheDocument();
    expect(screen.getByText(`${USD_CURRENCY.symbol} 5.00`)).toBeInTheDocument();
    expect(
      screen.getByText(`${USD_CURRENCY.code} ${USD_CURRENCY.symbol} 115.00`),
    ).toBeInTheDocument();
  });
});
