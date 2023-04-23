import { useState, useCallback, useRef } from "react";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

function useSearchProduct() {
  const { onUpdateIsOpen } = useGlobalLoading();

  //useState
  const [searchText, setSearchText] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);

  const executeSearch = (input: string) => {
    onUpdateIsOpen();
    const timerId = setTimeout(() => {
      setSearchText(input);
      onUpdateIsOpen();
    }, 250);

    return () => clearTimeout(timerId);
  };

  //useCallback
  const handleSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!searchRef.current) return;
      executeSearch(searchRef.current.value);
    },
    [searchRef],
  );

  // const handleSearchInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchInput(event.target.value);
  // }, []);

  return {
    searchText,
    setSearchText,
    searchRef,
    handleSearchSubmit,
  };
}

export default useSearchProduct;
