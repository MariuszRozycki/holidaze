import { useEffect } from "react";
import { ENDPOINTS } from "../../api/endpoints";
import { Action } from "../../state/AppReducer";

export const useFetchData = (
  currentPage: number = 1,
  searchQuery: string = "",
  limit: number = 10,
  sort: string = "",
  sortOrder: string = "",
  dispatch: React.Dispatch<Action>,
  venueId?: string
) => {
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_VENUES_START" });

      try {
        const url = venueId
          ? ENDPOINTS.venuesById(venueId)
          : searchQuery
          ? ENDPOINTS.searchVenues(searchQuery)
          : ENDPOINTS.venues(limit, currentPage, sort, sortOrder);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (venueId) {
          dispatch({
            type: "FETCH_VENUE_DETAILS_SUCCESS",
            payload: result.data,
          });
        } else {
          dispatch({
            type: "FETCH_VENUES_SUCCESS",
            payload: { data: result.data, meta: result.meta },
          });
        }
      } catch (error) {
        dispatch({
          type: "FETCH_VENUES_ERROR",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    fetchData();
  }, [currentPage, searchQuery, limit, sort, sortOrder, dispatch, venueId]);
};
