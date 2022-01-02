import create from "zustand";
import catSlice from "./cat.slice";

const useStore = create((set, get) => ({
  ...catSlice(set, get)
}))

export default useStore;