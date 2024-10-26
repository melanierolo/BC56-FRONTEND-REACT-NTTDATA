import { render, screen, fireEvent } from "@testing-library/react";
import Dialog, { DialogProps } from "./index";

describe("Dialog component", () => {
  const onClose = jest.fn();

  const renderComponent = (props: Partial<DialogProps> = {}) => {
    render(<Dialog open={true} onClose={onClose} message="Test message" {...props} />);
    return {
      dialogOverlay: screen.getByRole("dialog").parentElement,
      dialogContent: screen.getByRole("dialog"),
      dialogMessage: screen.getByText("Test message"),
      dialogImage: props.imageUrl ? screen.getByAltText("dialog image") : null,
    };
  };

  it("should render the dialog with message", () => {
    const { dialogContent, dialogMessage } = renderComponent();

    expect(dialogContent).toBeInTheDocument();
    expect(dialogMessage).toBeInTheDocument();
  });

  it("should render the dialog with image if imageUrl is provided", () => {
    const { dialogImage } = renderComponent({ imageUrl: "test-image-url.jpg" });

    expect(dialogImage).toBeInTheDocument();
    expect(dialogImage).toHaveAttribute("src", "test-image-url.jpg");
  });

  it("should not render the dialog if open is false", () => {
    render(<Dialog open={false} onClose={onClose} message="Test message" />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should not call onClose when content is clicked", () => {
    const { dialogContent } = renderComponent();

    fireEvent.click(dialogContent);
    expect(onClose).not.toHaveBeenCalled();
  });
});
