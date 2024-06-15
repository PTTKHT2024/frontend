import React from 'react';

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav>
      <ul className="flex items-center">
        {pageNumber.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-2.5 py-1.5 rounded-md cursor-pointer mx-0.5 shadow-sm ${
              currentPage === pageNumber ? 'bg-[#f5f5f5]' : 'hover:bg-[#f5f5f5]'
            }`}
          >
            <button className="font-medium text-sm h-full w-full">
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginator;
