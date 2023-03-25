import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { definedStore } from "helpers/*";

//api
import { onGetProduct } from "api/product";

//type
import { ProductsType } from "api/product/product.type";

type useProductStoreType = {
  data: ProductsType | null;
  error: string | null;
  getProducts: () => Promise<void>;
};

const useProductStore = create<useProductStoreType>()(
  devtools(
    (set) => ({
      data: null,
      error: null,
      getProducts: async () => {
        const [data, error] = await onGetProduct();
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

export default useProductStore;
