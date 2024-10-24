import { render } from "@testing-library/react";
import Logo from "./index";

// Mock the svg import
jest.mock("@assets/vectors/logo-markethub.svg", () => "logo-markethub.svg");

describe("Logo component", () => {
  it("should render the MarketHub logo correctly", () => {
    const { container } = render(<Logo />);
    const img = container.querySelector("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "logo-markethub.svg");
    expect(img).toHaveAttribute("alt", "MarketHub - logotype");
  });
});
