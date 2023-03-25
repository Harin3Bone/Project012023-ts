import { useEffect } from "react";
import { shallow } from "zustand/shallow";

//store
import useProductStore from "src/store/product/product.store";
import useCategoriesStore from "src/store/categories/categories.store";

//hook
import { useGlobalLoading } from "../useGlobalLoading";

//type
import { ProductsType } from "src/api/product/product.type";
import { CategoriesType } from "src/api/category/categories.type";

type UseCatalogDataReturnType = [products: ProductsType | null, category: CategoriesType | null];

function useCatalogData(): UseCatalogDataReturnType {
  const { products, errorProduct, getProducts } = useProductStore(
    (state) => ({
      products: state.data,
      errorProduct: state.error,
      getProducts: state.getProducts,
    }),
    shallow,
  );

  const { category, errorCategories, getCategories } = useCategoriesStore(
    (state) => ({
      category: state.data,
      errorCategories: state.error,
      getCategories: state.getCategories,
    }),
    shallow,
  );

  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    onUpdateIsOpen();
    getProducts();
    getCategories();
    onUpdateIsOpen();
  }, []);

  function loadData(): UseCatalogDataReturnType {
    const errors = [];
    if (errorProduct) errors.push(errorProduct);
    if (errorCategories) errors.push(errorCategories);
    if (errors.length > 0) {
      console.warn(...errors);
    }
    if (products && category) {
      return [products, category];
    }
    return [null, null];
  }
  return loadData();
}

export default useCatalogData;
