import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type PaginationPropTypes = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }: PaginationPropTypes) {
  const pages = [];
  const pageCount = totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 1;

  for (let i = 1; i <= pageCount; i++) {
    const showFirstAndLastPage = (i === 1 || i === pageCount);
    const isNearCurrentPage = Math.abs(currentPage - i) <= 3;

    if (showFirstAndLastPage || isNearCurrentPage) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={
            "flex justify-center items-center w-8 h-8 px-2 py-3 rounded-full bg-black text-white cursor-pointer shadow-sm " +
            (currentPage === i ? " border-2 bg-[#FFFF] text-black " : "")
          }
        >
          {i}
        </button>,
      );
    }
  }

  return (
    <div className=' flex justify-center items-center gap-1'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={
          "flex justify-center items-center w-8 h-8 mr-2 px-2 py-3 border-2 rounded-full bg-white text-black cursor-pointer shadow-sm hover:bg-black hover:text-white"
        }
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pages}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={
          "flex justify-center items-center w-8 h-8 ml-2 px-2 py-3 border-2 rounded-full bg-white text-black cursor-pointer shadow-sm hover:bg-black hover:text-white"
        }
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Pagination;
//Math.ceil() คือการปัดเศษให้เป็นจำนวนเต็มแต่เป็นการปัดขึ้น เช่น Math.ceil(7.004) output: 8, Math.ceil(-7.004) output: -7
//Math.abs(a - b) คือ จะคืนค่าที่กระทำการกับเป็นจำนวนที่เป็นบวก เช่น Math.abs(3 - 5) output: 2 ซึ้งตามมาบวกปกติจะเป็น -2 แต่ตัว Math.abs จะทำให้กลายเป็นจำนวนบวกเสมอ,
