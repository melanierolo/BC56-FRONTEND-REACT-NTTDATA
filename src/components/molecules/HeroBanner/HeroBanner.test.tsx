import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import HeroBanner, { HeroBannerProps } from "./index";

describe("HeroBanner component", () => {
  const renderComponent = (props: Partial<HeroBannerProps> = {}) => {
    render(
      <Router>
        <HeroBanner
          mainTitle="Main Title"
          highlightedTitle="Highlighted Title"
          paragraphText="This is a paragraph."
          buttonText="Click Me"
          buttonLink="/test-link"
          {...props}
        />
      </Router>,
    );
    return {
      heroTitle: screen.getByText(/Main Title/i),
      highlightedTitle: screen.getByText(/Highlighted Title/i),
      paragraphText: screen.getByText(
        new RegExp(props.paragraphText || "This is a paragraph.", "i"),
      ),
      buttonText: screen.getByText(new RegExp(props.buttonText || "Click Me", "i")),
      buttonLink: screen.getByRole("link", {
        name: new RegExp(props.buttonText || "Click Me", "i"),
      }),
    };
  };

  it("should render with default props", () => {
    const { heroTitle, highlightedTitle, paragraphText, buttonText, buttonLink } =
      renderComponent();

    expect(heroTitle).toBeInTheDocument();
    expect(highlightedTitle).toBeInTheDocument();
    expect(paragraphText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
    expect(buttonLink).toHaveAttribute("href", "/test-link");
  });

  it("should render with custom props", () => {
    const customProps = {
      mainTitle: "Custom Main Title",
      highlightedTitle: "Custom Highlighted Title",
      paragraphText: "Custom paragraph text.",
      buttonText: "Custom Button",
      buttonLink: "/custom-link",
    };
    const { heroTitle, highlightedTitle, paragraphText, buttonText, buttonLink } =
      renderComponent(customProps);

    expect(heroTitle).toHaveTextContent(customProps.mainTitle);
    expect(highlightedTitle).toHaveTextContent(customProps.highlightedTitle);
    expect(paragraphText).toHaveTextContent(customProps.paragraphText);
    expect(buttonText).toHaveTextContent(customProps.buttonText);
    expect(buttonLink).toHaveAttribute("href", customProps.buttonLink);
  });

  it("should render Link with correct href and Button with correct text", () => {
    const customProps = {
      buttonText: "Custom Button",
      buttonLink: "/custom-link",
    };
    const { buttonLink, buttonText } = renderComponent(customProps);

    expect(buttonLink).toHaveAttribute("href", customProps.buttonLink);
    expect(buttonText).toHaveTextContent(customProps.buttonText);
  });
});
