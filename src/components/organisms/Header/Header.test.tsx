import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";
import { AuthContext } from "@root/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Mock the svg import
jest.mock("@assets/vectors/logo-markethub.svg", () => "logo-markethub.svg");
jest.mock("@assets/icons/shopping-cart-icon.svg", () => "shopping-cart-icon.svg");

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Header component", () => {
  const mockLogout = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  const renderComponent = (authState: any) => {
    render(
      <AuthContext.Provider value={{ authState, logout: mockLogout, login: jest.fn() }}>
        <Router>
          <Header />
        </Router>
      </AuthContext.Provider>,
    );
  };

  it("should render the logo and navigation links", () => {
    renderComponent({ isAuthenticated: false });

    expect(screen.getByAltText("MarketHub - logotype")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
  });

  it("should display 'Sign in' when user is not authenticated", () => {
    renderComponent({ isAuthenticated: false });

    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("should display 'Welcome User' and 'Logout' button when user is authenticated", () => {
    renderComponent({ isAuthenticated: true, firstName: "John" });

    expect(screen.getByText("Welcome John")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });

  it("should call logout and navigate to login page when 'Logout' button is clicked", () => {
    renderComponent({ isAuthenticated: true, firstName: "John" });

    fireEvent.click(screen.getByRole("button", { name: /logout/i }));

    expect(mockLogout).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
