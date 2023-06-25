import React from 'react';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getDisplayedPages = () => {
    const displayedPages: number[] = [];

    // Displayed page range configuration
    const rangeSize = 2; // Number of pages to show on each side of the current page
    const rangeStart = Math.max(currentPage - rangeSize, 1);
    const rangeEnd = Math.min(currentPage + rangeSize, totalPages);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      displayedPages.push(i);
    }

    return displayedPages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className='flex justify-center w-full pb-4 space-x-2'>
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className='px-4 py-2 font-semibold rounded text-base-content bg-base-300'
      >
        Previous
      </button>
      {displayedPages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          disabled={pageNumber === currentPage}
          className={`${
            pageNumber === currentPage
              ? 'bg-primary text-base-100'
              : 'bg-base-300 text-base-content'
          } font-semibold py-2 px-4 rounded`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className='px-4 py-2 font-semibold rounded text-base-content bg-base-300'
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
