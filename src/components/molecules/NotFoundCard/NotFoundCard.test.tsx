import { render, screen } from "@testing-library/react";
import NotFoundCard, { NotFoundCardProps } from "./index";

// mock file
jest.mock("@assets/images/not-found.png", () => "not-found.png");

describe("NotFoundCard component", () => {
  const renderComponent = (props: Partial<NotFoundCardProps> = {}) => {
    render(<NotFoundCard {...props} />);
    return {
      notFoundTitle: screen.getByText("Search Results"),
      notFoundMessage: screen.getByText(
        new RegExp(props.message || "No results found. Please adjust your filters or keyword", "i"),
      ),
      notFoundImage: screen.getByAltText("not found - image"),
    };
  };

  it("should render with default message", () => {
    const { notFoundTitle, notFoundMessage, notFoundImage } = renderComponent();

    expect(notFoundTitle).toBeInTheDocument();
    expect(notFoundMessage).toBeInTheDocument();
    expect(notFoundImage).toBeInTheDocument();
  });

  it("should render with custom message", () => {
    const customMessage = "Custom not found message";
    const { notFoundTitle, notFoundMessage, notFoundImage } = renderComponent({
      message: customMessage,
    });

    expect(notFoundTitle).toBeInTheDocument();
    expect(notFoundMessage).toBeInTheDocument();
    expect(notFoundMessage).toHaveTextContent(customMessage);
    expect(notFoundImage).toBeInTheDocument();
  });
});
