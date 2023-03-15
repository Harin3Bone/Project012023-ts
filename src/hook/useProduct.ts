import { useEffect } from "react";
import { shallow } from "zustand/shallow";

//store
import useProductStore from "store/product/product.store";

//hook
import { useGlobalLoading } from "./useGlobalLoading";

function useProduct() {
  const { products, error, getProducts } = useProductStore(
    (state) => ({
      products: state.data,
      error: state.error,
      getProducts: state.getProducts,
    }),
    shallow,
  );

  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    onUpdateIsOpen();
    getProducts();
    onUpdateIsOpen();
  }, []);

  function loadProducts() {
    if (error) {
      console.warn(error);
      return null;
    }
    if (products) {
      return products;
    }
    // console.warn(error);
    return null;
  }
  return loadProducts();
}

export default useProduct;
