import { useEffect } from "react";
import { shallow } from "zustand/shallow";

//store
import useProductStore from "store/product/product.store";

//hook
import { useGlobalLoading } from "./useGlobalLoading";
import { onGetProductPropType } from "api/product";

function useProductData({ IdProduct, item }: onGetProductPropType) {
  const { data, error, getProduct } = useProductStore(
    (state) => ({
      data: state.data,
      error: state.error,
      getProduct: state.getProduct,
    }),
    shallow,
  );

  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    onUpdateIsOpen();
    if(IdProduct || item){
      getProduct({IdProduct,item});
      onUpdateIsOpen();
    }
  }, []);

  function loadData() {
    if (error) {
      console.warn(error);
    }
    return data;
  }
  return loadData();
}

export default useProductData;
