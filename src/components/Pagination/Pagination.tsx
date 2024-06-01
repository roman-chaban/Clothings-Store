'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect } from 'react';
import styles from './PaginationStyles.module.scss';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pathname = usePathname();

  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2);

      if (currentPage <= 4) {
        pageNumbers.push(3, 4, 5);
        pageNumbers.push('...');
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 4, totalPages - 3, totalPages - 2);
      } else {
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages - 1, totalPages);
    }

    return pageNumbers;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  return (
    <>
      <nav
        className={styles.pagination__isRounded}
        role='navigation'
        aria-label='pagination'
      >
        <button
          className={styles.pagination__previous}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            opacity: currentPage === 1 ? 0.7 : 1,
            cursor: currentPage === 1 ? 'not-allowed' : '',
          }}
        >
          Previous
        </button>

        <button
          className={styles.pagination__next}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            opacity: currentPage === totalPages ? 0.7 : 1,
            cursor: currentPage === totalPages ? 'not-allowed' : '',
          }}
        >
          Next page
        </button>

        <ul className={styles.pagination__list}>
          {generatePageNumbers().map((pageNumber, index) => (
            <li key={index}>
              {typeof pageNumber === 'number' ? (
                <Link
                  href={{
                    pathname: pathname,
                    search: `?page=${pageNumber}`,
                  }}
                  className={
                    pageNumber === currentPage
                      ? styles.paginationLink__isCurrent
                      : styles.pagination__link
                  }
                  aria-label={`Go to page ${pageNumber}`}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </Link>
              ) : (
                <span className='pagination-ellipsis'>...</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
