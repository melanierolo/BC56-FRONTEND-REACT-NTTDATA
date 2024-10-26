import { render, screen } from "@testing-library/react";
import Table from "./index";

interface TestData {
  id: number;
  name: string;
  age: number;
}

const columns = [
  { header: "ID", key: "id" },
  { header: "Name", key: "name" },
  { header: "Age", key: "age" },
];

const data: TestData[] = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

const renderRow = (item: TestData) => (
  <>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
  </>
);

describe("Table component", () => {
  const renderComponent = () =>
    render(<Table columns={columns} data={data} renderRow={renderRow} />);

  it("should render table headers correctly", () => {
    renderComponent();

    columns.forEach((col) => {
      expect(screen.getByText(col.header)).toBeInTheDocument();
    });
  });

  it("should render table rows correctly", () => {
    renderComponent();

    data.forEach((item) => {
      expect(screen.getByText(item.id.toString())).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age.toString())).toBeInTheDocument();
    });
  });
});
