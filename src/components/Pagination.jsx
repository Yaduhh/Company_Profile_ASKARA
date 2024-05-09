import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ currentPage, pageSize, onPageChange, blogs }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  //   console.log(totalPages);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activerPagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <>
      <ul className="pagination my-8 flex-wrap gap-4 font-primary">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
        </li>
        <div className="flex gap-0">{renderPaginationLinks()}</div>
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
