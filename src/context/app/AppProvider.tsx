import React, { useReducer, useEffect } from "react";
import { appReducer, initialState } from "../../state/AppReducer";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedVenueState = localStorage.getItem("VENUE_STATE") ? JSON.parse(localStorage.getItem("VENUE_STATE") as string) : null;

  const [state, dispatch] = useReducer(appReducer, savedVenueState || initialState);

  useEffect(() => {
    localStorage.setItem("VENUE_STATE", JSON.stringify(state));
  }, [state]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
