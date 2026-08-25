import css from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={css.pagination}
      aria-label="Пагінація виконаних робіт"
    >
      <button
        type="button"
        className={css.paginationButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Попередня сторінка"
      >
        ←
      </button>

      <div className={css.pages}>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              type="button"
              className={`${css.paginationButton} ${
                currentPage === page ? css.activePage : ''
              }`}
              onClick={() => onPageChange(page)}
              aria-label={`Сторінка ${page}`}
              aria-current={
                currentPage === page ? 'page' : undefined
              }
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className={css.paginationButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Наступна сторінка"
      >
        →
      </button>
    </nav>
  );
}