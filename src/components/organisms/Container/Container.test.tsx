import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import Container from "./index";

describe("Container component", () => {
  const renderComponent = (children: ReactNode) => render(<Container>{children}</Container>);

  it("should render the component with children", () => {
    renderComponent(<p>Test Child</p>);

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("should apply the correct class to the container", () => {
    renderComponent(<p>Test Child</p>);

    const containerElement = screen.getByText("Test Child").closest("div");
    expect(containerElement).toHaveClass("container");
  });
});
