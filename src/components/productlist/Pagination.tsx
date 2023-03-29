import { useSearchParams } from "react-router-dom";

//fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type PaginationPropTypes = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }: PaginationPropTypes) {
  const [, setSearchParams] = useSearchParams();

  const pages = [];
  const pageCount = totalItems && itemsPerPage ? Math.ceil(totalItems / itemsPerPage) : 1;
  let hasDisplayedLeftEllipsis = false;
  let hasDisplayedRightEllipsis = false;

  for (let i = 1; i <= pageCount; i++) {
    const showFirstAndLastPage = i === 1 || i === pageCount;
    const isNearCurrentPage = Math.abs(currentPage - i) <= 1;

    if (showFirstAndLastPage || isNearCurrentPage) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            onPageChange(i);
            setSearchParams({ page: i.toString() });
          }}
          className={
            "flex justify-center items-center w-8 h-8 px-2 py-3 rounded-full cursor-pointer shadow-sm " +
            (currentPage === i ? " bg-black text-white" : "bg-[#FFFF] text-black border-2 ")
          }
        >
          {i}
        </button>,
      );
    } else {
      if (i < currentPage && !hasDisplayedLeftEllipsis) {
        pages.push(
          <span key={i} className='flex justify-center items-center w-8 h-8'>
            ...
          </span>,
        );
        hasDisplayedLeftEllipsis = true;
      }
      if (i > currentPage && !hasDisplayedRightEllipsis) {
        pages.push(
          <span key={i} className='flex justify-center items-center w-8 h-8'>
            ...
          </span>,
        );
        hasDisplayedRightEllipsis = true;
      }
    }
  }

  return (
    <div className=' flex justify-center items-center gap-1 my-5'>
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
//Math.abs(a - b) คือ จะคืนค่าที่กระทำการกับเป็นจำนวนที่เป็นบวก เช่น Math.abs(3 - 5) output: 2 ซึ้งตามมาบวกปกติจะเป็น -2 แต่ตัว Math.abs จะทำให้กลายเป็นจำนวนบวกเสมอ
//let [searchParams, setSearchParams] = useSearchParams() ใช้สำหรับ query string (search parameters) ใน URL
//1. searchParams  ตัวแปรนี้เป็นอินสแตนซ์ของ URLSearchParams ซึ่งให้คุณเข้าถึงค่าของ query string ที่ปัจจุบัน คุณสามารถใช้เมธอดเช่น searchParams.get('key') เพื่อดึงค่าของ key ที่กำหนด
//2. setSearchParams ตัวแปรนี้เป็นฟังก์ชันที่ให้คุณเปลี่ยนค่าของ query string คุณสามารถส่งออบเจกต์ที่มีคีย์และค่าเพื่ออัปเดตค่าของ query string และเมื่อเรียกใช้ฟังก์ชันนี้ มันจะทำการเปลี่ยนค่าของ URL และเรียกใช้การ render ใหม่ของคอมโพเนนต์
