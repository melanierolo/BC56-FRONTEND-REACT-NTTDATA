import { ReactNode } from "react";
import "./style.css";

interface TableProps<T> {
  columns: { header: string; key: string }[];
  data: T[];
  renderRow: (item: T) => ReactNode;
}

const Table = <T,>({ columns, data, renderRow }: TableProps<T>) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="table__cell table__cell--header">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((item, index) => (
          <tr key={`${index}`}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
