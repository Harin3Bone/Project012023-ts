import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { definedStore } from "helpers";

import { onGetProfileWithUserId } from "api/profile";

import { ProfileType } from "./profile.type";

type UseProfileStoreType = {
  user: ProfileType | null;
  error: string | null;
  onUpdateUser: (user: ProfileType) => ProfileType;
  onRemoveUser: () => void;
  onGetProfile: () => Promise<[ProfileType | null, null | string]>;
};

const useProfileStore = create<UseProfileStoreType>()(
  devtools(
    (set) => ({
      user: null,
      error: null,
      onUpdateUser: (user) => {
        set({ user }, false, "onUpdateUser");
        return user;
      },
      onRemoveUser: () => {
        set({ user: null }, false, "onRemoveUser");
      },
      onGetProfile: async () => {
        const [data, error] = await onGetProfileWithUserId();
        if (error) {
          set({ error: error }, false, "getProductsError");
        }
        if (data) {
          set({ user: data }, false, "onGetProfileSuccessfully");
        }
        return [data, error]
      },
    }),
    definedStore("useProfileStore"),
  ),
);

export default useProfileStore;
