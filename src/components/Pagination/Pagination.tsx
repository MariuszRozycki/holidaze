import React from "react";
import { useAppContext } from "../../context/app/useAppContext";
import "./Pagination.scss";

const Pagination: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { currentPage, meta } = state;

  if (!meta) return null;

  const { isFirstPage, isLastPage, pageCount } = meta;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      dispatch({ type: "SET_PAGE", payload: page });
    }
  };

  return (
    <div className='pagination-container'>
      <button className='btn btn-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={isFirstPage}>
        Previous
      </button>
      <span className='pagination-info'>
        Page {currentPage} / {pageCount}
      </span>
      <button className='btn btn-primary' onClick={() => handlePageChange(currentPage + 1)} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
