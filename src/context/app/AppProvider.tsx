import { useReducer, useEffect } from "react";
import { appReducer, initialState } from "../../state/AppReducer";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedVenueState = localStorage.getItem("VENUE_STATE") ? JSON.parse(localStorage.getItem("VENUE_STATE") as string) : null;

  const savedToken = localStorage.getItem("ACCESS_TOKEN");
  const savedApiKey = localStorage.getItem("API_KEY");

  const savedUserData = localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA") as string) : null;

  const mergedInitialState = {
    ...initialState,
    ...savedVenueState,
    accessToken: savedToken || null,
    apiKey: savedApiKey || null,
    userData: savedUserData || null,
  };

  const [state, dispatch] = useReducer(appReducer, mergedInitialState);

  useEffect(() => {
    if (state.accessToken) {
      localStorage.setItem("ACCESS_TOKEN", state.accessToken);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }

    if (state.apiKey) {
      localStorage.setItem("API_KEY", state.apiKey);
    } else {
      localStorage.removeItem("API_KEY");
    }

    if (state.userData) {
      localStorage.setItem("USER_DATA", JSON.stringify(state.userData));
    } else {
      localStorage.removeItem("USER_DATA");
    }

    if (state.accessToken) {
      localStorage.setItem("VENUE_STATE", JSON.stringify(state));
    } else {
      localStorage.removeItem("VENUE_STATE");
    }
  }, [state]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
