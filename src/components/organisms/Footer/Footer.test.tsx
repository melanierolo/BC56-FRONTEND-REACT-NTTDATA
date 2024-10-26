import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./index";

// Mock the svg imports
jest.mock("@assets/vectors/logo-markethub.svg", () => "logo-markethub.svg");
jest.mock("@assets/icons/facebook-icon.svg", () => "facebook-icon.svg");
jest.mock("@assets/icons/instagram-icon.svg", () => "instagram-icon.svg");
jest.mock("@assets/icons/tiktok-icon.svg", () => "tiktok-icon.svg");
jest.mock("@assets/icons/whatsapp-icon.svg", () => "whatsapp-icon.svg");

describe("Footer component", () => {
  const renderFooter = () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  };

  it("should render correctly with the provided navigation items and social media links", () => {
    renderFooter();

    // Check for navigation items
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Terms of Use")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // Check for social media links
    expect(screen.getByAltText("Facebook icon")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram icon")).toBeInTheDocument();
    expect(screen.getByAltText("whatsapp icon")).toBeInTheDocument();
    expect(screen.getByAltText("tiktok icon")).toBeInTheDocument();

    // Check for copyright text
    expect(screen.getByText("© 2024 MarketHub. All right reserved.")).toBeInTheDocument();
  });
});
