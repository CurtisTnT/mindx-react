import React, { useState } from "react";

import { StoreContext } from ".";

export default function StoreProvider({ children }) {
  const [initialRecords, setInitialRecords] = useState({
    next: "",
    previous: "",
    results: [],
  });

  return (
    <StoreContext.Provider
      value={{ records: initialRecords, setRecords: setInitialRecords }}
    >
      {children}
    </StoreContext.Provider>
  );
}
