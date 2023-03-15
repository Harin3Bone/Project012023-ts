import { useEffect } from "react";
import { shallow } from "zustand/shallow";

//store
import useCategoriesStore from "store/categories/categories.store";

//hook
import { useGlobalLoading } from "./useGlobalLoading";

function useCategories() {
  const { category, error, getCategories } = useCategoriesStore(
    (state) => ({
      category: state.data,
      error: state.error,
      getCategories: state.getCategories,
    }),
    shallow,
  );

  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    onUpdateIsOpen()
    getCategories();
    onUpdateIsOpen()
  }, []);

  function loadCategories() {
    if (error) {
      console.warn(error);
      return null;
    }
    if (category) {
      return category;
    }
    // console.warn(error);
    return null;
  }
  return loadCategories();
}

export default useCategories;
