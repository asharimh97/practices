import create from "zustand";
import produce from "immer";

interface RootStore {
  count: number;
  increment: () => void;
}

const useRootStore = create<RootStore>((set, get) => ({
  count: 0,
  increment: () =>
    set(
      produce((state) => {
        state.count += 1;
      })
    ),
}));

export default useRootStore;
