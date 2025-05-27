import { create } from "zustand";

interface useTestStoreProps {
  total: number;
  inc: () => void;
  dec: () => void;
}

export const useTestStore = create<useTestStoreProps>((set) => ({
  total: 0,
  inc: () => set((state) => ({ total: state.total + 1 })),
  dec: () => set((state) => ({ total: state.total - 1})),
  }));