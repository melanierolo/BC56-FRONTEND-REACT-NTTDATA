import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "@root/contexts/AuthContext";
import { PrivateRoutes } from "@root/router/PrivateRoutes";
import { Navigate } from "react-router";

// Mock the Navigate component
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  Navigate: jest.fn(() => null),
}));

describe("PrivateRoutes component", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();

  const renderComponent = (authState: any, children: React.ReactNode) => {
    render(
      <AuthContext.Provider value={{ authState, login: mockLogin, logout: mockLogout }}>
        <Router>
          <PrivateRoutes>{children}</PrivateRoutes>
        </Router>
      </AuthContext.Provider>,
    );
  };

  it("should render children when user is authenticated", () => {
    renderComponent({ isAuthenticated: true }, <div>Protected Content</div>);

    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });

  it("should navigate to login when user is not authenticated", () => {
    renderComponent({ isAuthenticated: false }, <div>Protected Content</div>);

    expect(Navigate).toHaveBeenCalledWith({ to: "/login" }, {});
  });
});
