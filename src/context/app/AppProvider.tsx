import React, { useReducer, useEffect } from "react";
import { appReducer, initialState } from "../../state/AppReducer";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pobierz stan zapisany w localStorage
  const savedVenueState = localStorage.getItem("VENUE_STATE") ? JSON.parse(localStorage.getItem("VENUE_STATE") as string) : null;

  const savedToken = localStorage.getItem("ACCESS_TOKEN");

  const savedUserData = localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA") as string) : null;

  // Połącz initialState, zapisany stan oraz ACCESS_TOKEN i USER_DATA
  const mergedInitialState = {
    ...initialState,
    ...savedVenueState,
    accessToken: savedToken || null,
    userData: savedUserData || null, // Dodano obsługę USER_DATA
  };

  const [state, dispatch] = useReducer(appReducer, mergedInitialState);

  // Synchronizuj zmiany stanu z localStorage
  useEffect(() => {
    // localStorage.setItem("VENUE_STATE", JSON.stringify(state));
    if (state.accessToken) {
      localStorage.setItem("VENUE_STATE", JSON.stringify(state));
    } else {
      localStorage.removeItem("VENUE_STATE");
    }
    if (state.accessToken) {
      localStorage.setItem("ACCESS_TOKEN", state.accessToken);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
    if (state.userData) {
      localStorage.setItem("USER_DATA", JSON.stringify(state.userData));
    } else {
      localStorage.removeItem("USER_DATA");
    }
  }, [state]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
