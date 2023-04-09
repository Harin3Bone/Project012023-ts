import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { definedStore } from "helpers/*";

//api
import { onGetProducts } from "api/products";

//type
import { ProductsType } from "api/products/products.type";

type useProductsStoreType = {
  data: ProductsType | null;
  error: string | null;
  getProducts: () => Promise<void>;
};

const useProductsStore = create<useProductsStoreType>()(
  devtools(
    (set) => ({
      data: null,
      error: null,
      getProducts: async () => {
        const [data, error] = await onGetProducts();
        if (error) {
          set({ error: error }, false, "getProductsError");
        }
        if (data) {
          set({ data: data }, false, "getProductsSuccessfully");
        }
      },
    }),
    definedStore("useProductStore"),
  ),
);

export default useProductsStore;