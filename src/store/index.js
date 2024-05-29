import { createContext } from "react";

const initialState = {
  records: {
    next: "",
    previous: "",
    results: [],
  },
  setRecords: () => {},
};

export const StoreContext = createContext(initialState);
