import { atom, selector } from "recoil";

export const countsAtom = atom({
  key: "counts",
  default: 0
});

export const statusCountsAtom = selector({
  key: "countStatus",
  get: ({ get }) => {
    const counts = get(countsAtom);

    if (counts > 30) {
      return "Many";
    } else if (counts > 20) {
      return "Lumayan";
    } else if (counts > 10) {
      return "Hmm...";
    }
    return "Segini doang?";
  }
});
