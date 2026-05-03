"use client";

import { create } from "zustand";

interface SectionState {
  currentSection: string;
  setSection: (section: string) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
  currentSection: "Welcome",
  setSection: (section) => set({ currentSection: section }),
}));
