import styles from "./Pagination.module.scss";

interface PaginationProps {
  total: number;
  page: number;
  perPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}

const Pagination = ({
  total,
  page,
  perPage,
  onPageChange,
  onPerPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage);

  const pages = () => {
    const result: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) result.push(i);
    } else {
      result.push(1);
      if (page > 3) result.push("...");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      )
        result.push(i);
      if (page < totalPages - 2) result.push("...");
      result.push(totalPages);
    }
    return result;
  };

  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  return (
    <div className={styles.pagination}>
      <div className={styles.info}>
        Showing
        <select
          value={perPage}
          onChange={(e) => {
            onPerPageChange(Number(e.target.value));
            onPageChange(1);
          }}
        >
          {[10, 20, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        out of <strong>{total}</strong>
      </div>

      <div className={styles.pages}>
        <button
          className={styles.arrow}
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M7 1L2 6l5 5"
              stroke="#213F7D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {pages().map((p, i) =>
          p === "..." ? (
            <span key={`dots-${i}`} className={styles.dots}>
              ...
            </span>
          ) : (
            <button
              key={p}
              className={`${styles.page} ${p === page ? styles.active : ""}`}
              onClick={() => onPageChange(p as number)}
            >
              {p}
            </button>
          ),
        )}

        <button
          className={styles.arrow}
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next"
        >
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M1 1l5 5-5 5"
              stroke="#213F7D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.count}>
        {start}–{end} of {total}
      </div>
    </div>
  );
};

export default Pagination;
