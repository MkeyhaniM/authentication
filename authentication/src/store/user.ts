import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  expireTime: number | null;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setExpireTime: (time: number) => void;
  clearTokens: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  expireTime: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setRefreshToken: (token) => set({ refreshToken: token }),
  setExpireTime: (time) => set({ expireTime: time }),
  clearTokens: () =>
    set({ accessToken: null, refreshToken: null, expireTime: null }),
}));

export default useAuthStore;
