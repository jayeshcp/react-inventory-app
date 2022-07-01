import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const uuid1 = uuidv4();
const uuid2 = uuidv4();
const DBKey = 'inventory';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const defaultItems = {
  [uuid1]: {
    id: uuid1,
    title: 'Macbook Pro',
    manufacturer: 'Apple',
    description: "Bob's personal computer",
  },
  [uuid2]: {
    id: uuid2,
    title: 'Samsung Smart TV',
    manufacturer: 'Samsung',
    description: 'Wall mounted',
  },
};

export const useInventoryStore = create((set) => ({
  items: getLocalStorage(DBKey) || defaultItems,
  insertOrUpdate: (item) => {
    const id = item.id;

    set((state) => {
      const updatedItems = { ...state.items, [id]: { ...item, id } };
      setLocalStorage(DBKey, updatedItems);
      return { items: updatedItems };
    });
  },
  deleteItem: (item) =>
    set((state) => {
      if (state.items[item.id]) {
        delete state.items[item.id];
      }
      setLocalStorage(DBKey, state.items);
    }),
}));
