import { FC } from "react";
import "./style.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={`page-${page}`}
          onClick={() => onPageChange(page)}
          className={`pagination__btn ${currentPage === page ? "pagination__btn--active" : "pagination__btn--inactive"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
