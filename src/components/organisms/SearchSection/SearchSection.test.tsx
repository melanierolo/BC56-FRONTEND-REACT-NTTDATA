import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchSection from "./index";

// Mock the svg import
jest.mock("@root/assets/icons/search-icon.svg", () => "search-icon.svg");

describe("SearchSection component", () => {
  const renderSearchSection = () => {
    const mockSetSearchTerm = jest.fn();
    const searchTerm = "";
    render(<SearchSection searchTerm={searchTerm} onChange={mockSetSearchTerm} />);

    return {
      input: screen.getByPlaceholderText(/Search .../i),
      onChange: mockSetSearchTerm,
    };
  };

  it("should render correctly with the provided title, paragraph and placeholder text", () => {
    renderSearchSection();

    expect(screen.getByText("All You Need, Right Here")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Find a wide range of products tailored just for you! Explore and filter to discover your favorites",
      ),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Search ...")).toBeInTheDocument();
  });

  it("should update search term when user types in the input", async () => {
    const { input, onChange } = renderSearchSection();

    fireEvent.change(input, { target: { value: "searchTerm" } });

    expect(onChange).toHaveBeenCalledWith("searchTerm");
  });
});
