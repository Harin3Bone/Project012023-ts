import { useEffect } from "react";
import { shallow } from "zustand/shallow";

//store
import useProductsStore from "store/products/products.store";
import useCategoriesStore from "store/categories/categories.store";

//type
import { ProductsType } from "api/products/products.type";
import { CategoriesType } from "api/category/categories.type";

type UseCatalogDataReturnType = [products: ProductsType | null, category: CategoriesType | null];

function useCatalogData(): UseCatalogDataReturnType {
  const { products, errorProduct, getProducts } = useProductsStore(
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

  useEffect(() => {
    if(!category || !products){
      getProducts();
      getCategories();  
    }
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
