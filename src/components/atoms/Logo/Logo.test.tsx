import { render } from "@testing-library/react";
import Logo from "./index";

// Mock the svg import
//jest.mock("@assets/vectors/logo-markethub.svg");

describe("Logo component", () => {
  it("should render the MarketHub logo correctly", () => {
    const { container } = render(<Logo />);
    const logoImage = container.querySelector("img");
    console.log(logoImage);
  });
});
