import { useState, useCallback } from "react";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

type useCategoryFilterProductPropsType = {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

function useCategoryFilterProduct({ setSearchText }: useCategoryFilterProductPropsType) {
  const { onUpdateIsOpen } = useGlobalLoading();

  //useState
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [unconfirmedCategories, setUnconfirmedCategories] = useState<number[]>([]);

  //useCallback
  const onHandleCategorySelection = useCallback((categoryId: number, isChecked: boolean) => {
    setUnconfirmedCategories((prevState) =>
      isChecked ? [...prevState, categoryId] : prevState.filter((id) => id !== categoryId),
    );
  }, []);

  const handleCategorySubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onUpdateIsOpen();
      const timerId = setTimeout(() => {
        setSelectedCategories(unconfirmedCategories);
        setUnconfirmedCategories([]);
        onUpdateIsOpen();
      }, 250);
      return () => clearTimeout(timerId);
    },
    [unconfirmedCategories],
  );

  const handleResetForm = useCallback(() => {
    onUpdateIsOpen();
    const timerId = setTimeout(() => {
      setUnconfirmedCategories([]);
      setSelectedCategories([]);
      setSearchText("");
      onUpdateIsOpen();
    }, 250);
    return () => clearTimeout(timerId);
  }, []);

  const handleCategoryInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = parseInt(event.target.value, 10);
    const isChecked = event.target.checked;
    onHandleCategorySelection(categoryId, isChecked);
  }, []);

  return {
    selectedCategories,
    handleCategorySubmit,
    handleResetForm,
    handleCategoryInputChange,
  };
}

export default useCategoryFilterProduct;
