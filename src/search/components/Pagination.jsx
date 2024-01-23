import React from 'react';

const Pagination = ({ total, itemsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(total / itemsPerPage);

    return (
      <div className="flex justify-center mt-4">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`mx-1 px-3 py-2 text-sm border rounded ${
              i === currentPage ? 'bg-green-500 text-white' : 'bg-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
};
export default Pagination;