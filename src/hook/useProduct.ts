import { useEffect } from "react";

//api
import { getProducts } from "api/products";

//store
import useProductStore from "store/product/product.store";

//context
import { useGlobalLoading } from "./useGlobalLoading";

function useProduct() {
  const onUpdateProduct = useProductStore((state) => state.onUpdateProduct);

  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    onUpdateIsOpen();
    const getProduct = async () => {
      const [response, errorMessage] = await getProducts();
      if (!!response) {
        response && onUpdateProduct(response);      
        onUpdateIsOpen();
      } else {
        console.log(errorMessage);
        onUpdateIsOpen();
      }
    };
    getProduct();
  }, []);
}

export default useProduct;
