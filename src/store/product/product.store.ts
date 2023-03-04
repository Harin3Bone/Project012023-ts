import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { definedStore } from "helpers";

//type
import { ProductsType } from "./product.type";

type useProductStoreType = {
  data: ProductsType | null;
  onUpdateProduct: (products: ProductsType) => ProductsType;
};

const useProductStore = create<useProductStoreType>()(
  devtools(
    (set) => ({
      data: null,
      onUpdateProduct: (data) => {
        set({ data }, false, "onUpdateProduct");        
        return data;
      },
    }),
    definedStore("useProductStore"),
  ),
);

export default useProductStore;
