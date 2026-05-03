import { create } from "zustand";

export const useAppStore = create((set) => ({
  currentPage: "home",
  setPage: (page: string) => set({ currentPage: page }),
}));
