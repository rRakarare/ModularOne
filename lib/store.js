import { create } from "zustand";

export const useScrollStore = create((set) => ({
  scrollStates: { a: false, b: false, c: false, d: false },
  setStates: (key, bool) =>
    set((state) => {
        let obje = state.scrollStates
        obje[key]=bool
        return { scrollStates: { ...obje } }
    }),
}));
