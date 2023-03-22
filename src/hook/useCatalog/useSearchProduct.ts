import { useState, useCallback } from "react";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

function useSearchProduct() {
  const { onUpdateIsOpen } = useGlobalLoading();

  //useState
  const [searchText, setSearchText] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  //useCallback
  const handleSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onUpdateIsOpen();
      const timerId = setTimeout(() => {
        setSearchText(searchInput);
        onUpdateIsOpen();
      }, 250);

      return () => clearTimeout(timerId);
    },
    [searchInput],
  );

  const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }, []);

  return {
    searchText,
    setSearchText,
    searchInput,
    handleSearchSubmit,
    handleSearchInputChange,
  };
}

export default useSearchProduct;
