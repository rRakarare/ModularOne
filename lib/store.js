import { create } from "zustand";

export const useScrollStore = create((set) => ({
  scrollStates: {
    aState: { active: false, value: 0.2 }, // Default St
    bState: { active: false, value: 0.5 },
    cState: { active: false, value: 0.6 },
    dState: { active: false, value: 0.8 },
  },
  setStates: (key, bool) =>
    set((state) => {
      let obje = state.scrollStates;
      obje[key].active = bool;
      return { scrollStates: { ...obje } };
    }),
}));
