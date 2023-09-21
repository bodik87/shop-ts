import { create } from "zustand";

type Store = {
  modal: boolean;
  closed: () => void;
  opened: () => void;
};

export const useUIStore = create<Store>()((set) => ({
  modal: false,
  closed: () => set(() => ({ modal: false })),
  opened: () => set(() => ({ modal: true })),
}));
