import { useMemo, useCallback } from "react";

//store
import useFilteredProductStore from "store/useFilteredProductStore.store";

//hook
import useCatalogData from "./useCatalogData";
import useSearchProduct from "./useSearchProduct";
import useCategoryFilterProduct from "./useCategoryFilterProduct";
import useFilteredProduct from "./useFilteredProduct";
import usePagination from "./usePagination";

function useManageProductList() {
  const [products, category] = useCatalogData();

  const { filteredProduct, selectedCategories } = useFilteredProductStore(
    (state) => ({
      filteredProduct: state.filteredProduct,
      selectedCategories: state.selectedCategories,
    }),
  );

  const { searchText, setSearchText, searchInput, handleSearchSubmit, handleSearchInputChange } =
    useSearchProduct();
  const { currentPage, setCurrentPage, itemsPerPage, currentItems, handlePerPageChange } =
    usePagination({ filteredProduct: filteredProduct, selectedCategories: selectedCategories });
  const { handleCategorySubmit, handleResetForm, handleCategoryInputChange } =
    useCategoryFilterProduct({ setSearchText: setSearchText });
  const { sortOrder, handleSortOrderChange } = useFilteredProduct({
    products: products,
    searchText: searchText,
    selectedCategories: selectedCategories,
  });

  //useMemo
  const dataCategoryFilter = useMemo(() => category?.data, [category]);
  const totalItemsPagination = useMemo(() => filteredProduct.length, [filteredProduct]);

  //useCallback
  const onPageChangePagination = useCallback(
    (pageNumber: number) => setCurrentPage(pageNumber),
    [],
  );

  return {
    sortOrder,
    searchInput,
    handleSearchSubmit,
    handleSearchInputChange,
    handleCategorySubmit,
    handleResetForm,
    handleCategoryInputChange,
    handleSortOrderChange,
    currentPage,
    itemsPerPage,
    currentItems,
    handlePerPageChange,
    dataCategoryFilter,
    totalItemsPagination,
    onPageChangePagination,
  };
}

export default useManageProductList;
