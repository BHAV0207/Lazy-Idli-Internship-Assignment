import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <DataContext.Provider value={{ setData, data }}>
      {children}
    </DataContext.Provider>
  );
};
  