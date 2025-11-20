// Navigation store hook
import { create } from 'zustand';

interface NavStore {
  navOpen: boolean;
  toggleNav: () => void;
  setNavOpen: (open: boolean) => void;
}

export const useNavStore = create<NavStore>((set) => ({
  navOpen: true,
  toggleNav: () => set((state) => ({ navOpen: !state.navOpen })),
  setNavOpen: (open: boolean) => set({ navOpen: open }),
}));
