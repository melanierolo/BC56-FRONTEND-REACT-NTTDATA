import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "@root/contexts/AuthContext";
import { PublicRoutes } from "@root/router/PublicRoutes";
import { Navigate } from "react-router-dom";

// Mock the Navigate component
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(() => null),
}));

describe("PublicRoutes component", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  const renderComponent = (authState: any, children: React.ReactNode) => {
    render(
      <AuthContext.Provider value={{ authState, login: mockLogin, logout: mockLogout }}>
        <Router>
          <PublicRoutes>{children}</PublicRoutes>
        </Router>
      </AuthContext.Provider>,
    );
  };

  it("should render children when user is not authenticated", () => {
    renderComponent({ isAuthenticated: false }, <div>Public Content</div>);

    expect(screen.getByText("Public Content")).toBeInTheDocument();
  });

  it("should navigate to home when user is authenticated", () => {
    renderComponent({ isAuthenticated: true }, <div>Public Content</div>);

    expect(Navigate).toHaveBeenCalledWith({ to: "/" }, {});
  });
});
