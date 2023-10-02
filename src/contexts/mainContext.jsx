import { createContext } from "react";

const mainContext = createContext();

const initialState = {
  isLogged: false,
};

function mainProvider({ children }) {
  return <mainContext.Provider>{children}</mainContext.Provider>;
}

export default mainProvider;
