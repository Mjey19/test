import * as styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
function Pagination({
  totalLength,
  clickPage,

  prevPage,
  nextPage,
}: {
  totalLength: number;
  clickPage: Function;
  prevPage: () => void;
  nextPage: () => void;
}) {
  const handlePageChange = (event: { selected: number }) => {
    clickPage(event.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      pageRangeDisplayed={2}
      previousLabel={
        <div
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prevPage}
        >
          <img src="./arrow-right.svg" alt="" />
        </div>
      }
      nextLabel={
        <div
          className={`${styles.arrow} ${styles.arrowRigth}`}
          onClick={nextPage}
        >
          <img src="./arrow-right.svg" alt="" />
        </div>
      }
      onPageChange={handlePageChange}
      containerClassName={styles.pagination}
      pageCount={Math.ceil(totalLength / 6)}
      activeClassName={styles.active}
    />
  );
}

export default Pagination;
