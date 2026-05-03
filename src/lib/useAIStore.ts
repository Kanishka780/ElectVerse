import { create } from "zustand";

export const useAIStore = create((set) => ({
  open: false,
  setOpen: (val: boolean) => set({ open: val }),
}));
