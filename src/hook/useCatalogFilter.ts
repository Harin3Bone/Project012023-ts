import { useState, useMemo, useCallback } from "react";

//hook
import { useGlobalLoading } from "./useGlobalLoading";
import useCatalogData from "./useCatalogData";

function useCatalogFilter() {
  const [products, category] = useCatalogData();

  const { onUpdateIsOpen } = useGlobalLoading();

  //SortOrder useState
  const [sortOrder, setSortOrder] = useState<string>("asc");

  //SearchBox useState
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  //CategoryFilter useState
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [unconfirmedCategories, setUnconfirmedCategories] = useState<number[]>([]);

  //useMemo
  const filteredProduct = useMemo(() => {
    let filtered = products?.data
      ? products?.data?.filter(
          (product) =>
            product.name?.toLowerCase().includes(searchText.toLowerCase().trim()) &&
            (selectedCategories.length === 0 ||
              (product.category &&
                product.category.id &&
                selectedCategories.includes(product.category.id))),
        )
      : [];

    const sortedProducts = filtered.sort((a, b) => {
      const nameA = a.name || "";
      const nameB = b.name || "";
      const priceA = a.price || 0;
      const priceB = b.price || 0;

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "desc") {
        return nameB.localeCompare(nameA);
      } else if (sortOrder === "price_asc") {
        return priceA - priceB;
      } else if (sortOrder === "price_desc") {
        return priceB - priceA;
      }
      return 0;
    });

    return sortedProducts;
  }, [searchText, products, selectedCategories, sortOrder]);

  //useCallback SearchBox
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

  //useCallback CategoryFilter
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

  //useCallback SortOrder
  const handleSortOrderChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  }, []);

  return {
    products,
    category,
    searchInput,
    sortOrder,
    filteredProduct,
    handleSearchSubmit,
    handleSearchInputChange,
    handleCategorySubmit,
    handleResetForm,
    handleCategoryInputChange,
    handleSortOrderChange,
  };
}

export default useCatalogFilter;
//.sort() สำหรับเรียงลำดับทั้ง number และ string
//.sort() การใช้งานกับ number ถ้าเป็นการใช้แบบปกติจะเรียงลำดับตามค่า Unicode ซึ่งอาจทำให้การเรียงลำดับไม่ถูกต้องตามค่าตัวเลข เช่น const numberArray = [10, 5, 8, 1, 7] numberArray.sort() Output: [1, 10, 5, 7, 8]
//แต่ .sort((a, b) => a.localeCompare(b)) เพื่อเปรียบเทียบข้อมูลตัวเลข ซึ่งจะทำให้ข้อมูลถูกเรียงลำดับจากน้อยไปหามากอย่างถูกต้องตามค่าตัวเลข numberArray.sort((a, b) => a - b) Output: [1, 5, 7, 8, 10]
//.sort() การใช้งานกับ string ถ้าเป็นการใช้แบบปกติจะเรียงลำดับตามค่า Unicode ของข้อมูลการเรียงลำดับนี้อาจไม่ตรงในบางกรณี 
//แต่ .sort((a, b) => a.localeCompare(b)) การใช้แบบนี้จะเรียงลำดับถูกต้องตามภาษาท้องถิ่น ซึ่งอาจต่างจากการเรียงลำดับตามค่า Unicode

//trim() สำหรับตัดช่องว่างออกไป
//parseInt(ข้อมูลที่ต้องการจะแปล, แปลงเป็นอะไร เช่น เลขฐาน 2,10,16)
