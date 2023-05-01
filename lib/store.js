import { create } from "zustand";

export const useScrollStore = create((set) => ({
  scrollState: "default",
  scrollMap: {},
  setMap: (map) => {
    set((state) => ({ scrollMap: { ...map } }));
  },
  setState: (name) => {
    set((state) => ({ scrollState: `${name}` }));
  },
  scrollStates: {
    init: { active: false, value: 0.01 },
    aState: { active: false, value: 0.2 },
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
