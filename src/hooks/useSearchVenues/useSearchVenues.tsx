import { useEffect } from "react";
import { ENDPOINTS } from "../../api/endpoints";
import { Action } from "../../state/AppReducer";
import { Venue } from "../../types/api";

export const useSearchVenues = (query: string, dispatch: React.Dispatch<Action>) => {
  useEffect(() => {
    if (!query) return;

    const searchVenues = async () => {
      dispatch({ type: "SEARCH_VENUES_START" });
      try {
        const response = await fetch(ENDPOINTS.searchVenues(query));
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: Venue[] = await response.json();
        dispatch({ type: "SEARCH_VENUES_SUCCESS", payload: result });
      } catch (error) {
        dispatch({ type: "SEARCH_VENUES_ERROR", payload: error instanceof Error ? error.message : "Unknown error" });
      }
    };

    searchVenues();
  }, [query, dispatch]);
};
