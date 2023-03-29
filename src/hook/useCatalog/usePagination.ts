import { useState, useEffect, useCallback } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

//type
import { ProductsDataType, ProductsType } from "api/product/product.type";

type usePaginationPropsType = {
  products: ProductsType | null;
  filteredProduct: ProductsDataType[];
};

function usePagination({ products, filteredProduct }: usePaginationPropsType) {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);

  const { onUpdateIsOpen } = useGlobalLoading();

  //useState
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.data && filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  useEffect;
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    setCurrentPage(page);
  }, [location]);

  //useCallback
  const handlePerPageChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateIsOpen();
    const newPerPage = event.target.value;
    const timerId = setTimeout(() => {
      setItemsPerPage(parseInt(newPerPage));
      onUpdateIsOpen();
    },250);
    return () => clearTimeout(timerId);
  }, []);

  return {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    currentItems,
    handlePerPageChange,
  };
}

export default usePagination;
//location.search คือ property ของ object window.location ที่เก็บ query parameters ของ URL ในรูปแบบของ string แล้วเราเข้าถึง location.search จะได้ string ดังนี้ ?name=john&age=30
//location.search ไปใส่เพื่อให้ useSearchParams สามารถดึง query parameters ออกมาจาก URL ของเพจนั้นๆ ได้ โดยในตัวอย่างนี้ค่า location.search นั้นถูกส่งเข้าไปเพื่อสร้าง instance ของ URLSearchParams ที่จะใช้ในการดึง query parameters จาก URL ของเพจนั้นๆ
//ถ้าไม่ใส่ location.search ใน useSearchParams จะไม่สามารถดึงค่าพารามิเตอร์จาก query string ของ URL ได้ เพราะ location.search เป็น property ของ window.location ที่เก็บค่า query string ของ URL และถ้าไม่ใส่จะไม่มีค่า query string ถูกส่งมา ดังนั้น useSearchParams