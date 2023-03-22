import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

//type
import { ProductsDataType, ProductsType } from "api/product/product.type";

type usePaginationPropsType = {
  products: ProductsType | null;
  filteredProduct: ProductsDataType[];
};

function usePagination({ products, filteredProduct }: usePaginationPropsType) {
  const [searchParams] = useSearchParams();

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
