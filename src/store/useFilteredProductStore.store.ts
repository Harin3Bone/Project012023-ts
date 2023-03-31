import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { definedStore } from "helpers/*";

//type
import { ProductsDataType } from "api/product/product.type";

type useFilteredProductStoreType = {
  filteredProduct: ProductsDataType[];
  selectedCategories: number[];
  setFilteredProduct: (filtered: ProductsDataType[]) => void;
  setSelectedCategories: (categories: number[]) => void;
};

const useFilteredProductStore = create<useFilteredProductStoreType>()(
  devtools(
    (set) => ({
      filteredProduct: [],
      selectedCategories: [],
      setFilteredProduct: (filtered) =>
        set({ filteredProduct: filtered }, false, "setFilteredProduct"),
      setSelectedCategories: (categories) =>
        set({ selectedCategories: categories }, false, "setSelectedCategories"),
    }),
    definedStore("useFilteredProductStore"),
  ),
);

export default useFilteredProductStore;
