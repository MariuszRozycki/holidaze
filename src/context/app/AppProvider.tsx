import React, { useReducer } from "react";
import { appReducer, initialState } from "../../state/AppReducer";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
