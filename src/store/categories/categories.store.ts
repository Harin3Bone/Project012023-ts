import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { definedStore } from "src/helpers";

//api
import { onGetCategories } from "src/api/category";

//type
import { CategoriesType } from "src/api/category/categories.type";

type useCategoriesStoreType = {
  data: CategoriesType | null;
  error: string | null;
  getCategories: () => Promise<void>;
};

const useCategoriesStore = create<useCategoriesStoreType>()(
  devtools(
    (set) => ({
      data: null,
      error: null,
      getCategories: async () => {
        const [data, error] = await onGetCategories();
        if (error) {
          set({ error: error }, false, "getCategoriesError");
        }
        if (data) {
          set({ data: data }, false, "getCategoriesSuccessfully");
        }
      },
    }),
    definedStore("useProductStore"),
  ),
);

export default useCategoriesStore