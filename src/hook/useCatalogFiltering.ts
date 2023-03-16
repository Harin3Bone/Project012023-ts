import { useState, useMemo, useCallback } from "react";

//hook
import { useGlobalLoading } from "./useGlobalLoading";
import useCatalogData from "./useCatalogData";

function useCatalogFiltering() {
  const [products, category] = useCatalogData();

  const { onUpdateIsOpen } = useGlobalLoading();

  //SearchBox useState
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  //CategoryFilter useState
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [unconfirmedCategories, setUnconfirmedCategories] = useState<number[]>([]);

  //useMemo
  const filteredProduct = useMemo(
    () =>
      products?.data
        ? products?.data?.filter(
            (product) =>
              product.name?.toLowerCase().includes(searchText.toLowerCase().trim()) &&
              (selectedCategories.length === 0 ||
                (product.category?.id && selectedCategories.includes(product.category.id))),
          )
        : [],
    [searchText, products, selectedCategories],
  );

  //useCallback
  //SearchBox
  const handleSearchSubmit = useCallback(
    (text: string) => {
      onUpdateIsOpen();
      const timerId = setTimeout(() => {
        setSearchText(text);
        onUpdateIsOpen();
      }, 500);

      return () => clearTimeout(timerId);
    },
    [searchInput],
  );

  const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }, []);

  //CategoryFilter
  const onHandleCategorySelection = useCallback((categoryId: number, isChecked: boolean) => {
    setUnconfirmedCategories((prevState) =>
      isChecked ? [...prevState, categoryId] : prevState.filter((id) => id !== categoryId),
    );
  }, []);

  const handleCategorySubmit = useCallback(() => {
    onUpdateIsOpen();
    const timerId = setTimeout(() => {
      setSelectedCategories(unconfirmedCategories);
      setUnconfirmedCategories([]);
      onUpdateIsOpen();
    }, 500);

    return () => clearTimeout(timerId);
  }, [unconfirmedCategories]);

  const handleResetForm = useCallback(() => {
    setUnconfirmedCategories([]);
    setSelectedCategories([]);
    setSearchText("");
  }, []);

  const handleCategoryInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = parseInt(event.target.value, 10);
    const isChecked = event.target.checked;
    onHandleCategorySelection(categoryId, isChecked);
  }, []);

  return {
    products,
    category,
    searchInput,
    filteredProduct,
    handleSearchSubmit,
    handleSearchInputChange,
    handleCategorySubmit,
    handleResetForm,
    handleCategoryInputChange,
  };
}

export default useCatalogFiltering;
