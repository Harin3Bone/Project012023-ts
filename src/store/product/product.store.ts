import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { definedStore } from "helpers/*";

//api
import { onGetProduct, onGetProductPropType } from "api/product";

//type
import { ProductType } from "api/product/product.type";

type useProductStoreType = {
  data: ProductType | null;
  error: string | null;
  getProduct: ({ item }: onGetProductPropType) => Promise<void>;
};

const useProductStore = create<useProductStoreType>()(
  devtools(
    (set) => ({
      data: null,
      error: null,
      getProduct: async (item) => {
        const [data, error] = await onGetProduct(item);
        error
          ? set({ error: error }, false, "getProductError")
          : set({ data: data }, false, "getProductSuccessfully");
      },
    }),
    definedStore("useProductStore"),
  ),
);

export default useProductStore;
