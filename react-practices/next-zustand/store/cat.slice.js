import { nanoid } from "nanoid";

const catSlice = (set, get) => ({
  cats: [],
  addCat: (cat) => {
    const data = {
      ...cat,
      id: nanoid(),
    }
    const newCats = [...get().cats];
    newCats.push(data);

    set({ cats: newCats });
  },
  removeCat: (id) => {
    set(prevState => {
      const catId = prevState.cats.findIndex(cat => cat.id === id);

      if (catId >= 0) {
        const cats = [...prevState.cats];
        cats.splice(catId, 1);

        return {
          cats: cats,
        }
      }
    })
  }
})

export default catSlice;