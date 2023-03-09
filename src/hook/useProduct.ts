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
    if (!products) {
      onUpdateIsOpen();
      getProducts()
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          onUpdateIsOpen();
        });
    }
  }, [products, onUpdateIsOpen]);

  function loadProducts() {
    if (products) {
      return products;
    } else {
      console.error(error);
    }
  }
  return loadProducts();
}

export default useProduct;
