import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expireTime: number | null;
  loading: boolean;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setExpireTime: (time: number) => void;
  setRefreshAndAccessAndExpireTime: (
    refresh: string,
    access: string,
    expireTime: number
  ) => void;
  clearTokens: () => void;
  setLoading: (loading: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,
        expireTime: null,
        loading: true,
        setAccessToken: (token) => set({ accessToken: token }),
        setRefreshToken: (token) => set({ refreshToken: token }),
        setExpireTime: (time) => set({ expireTime: time }),
        setRefreshAndAccessAndExpireTime: (refresh, access, expireTime) =>
          set({
            accessToken: access,
            refreshToken: refresh,
            expireTime: expireTime,
          }),
        clearTokens: () =>
          set({ accessToken: null, refreshToken: null, expireTime: null }),
        setLoading: (loading) => set({ loading }),
      }),
      {
        name: "auth-storage",
        onRehydrateStorage: () => (state) => {
          state?.setLoading(false);
        },
      }
    ),
    {
      name: "AuthStore",
    }
  )
);

export default useAuthStore;
