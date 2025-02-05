import { useEffect } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";
import { Action } from "../../state/AppReducer";

export const useFetchVenueByName = (
  currentPage: number = 1,
  searchQuery: string = "",
  limit: number = 10,
  sort: string = "",
  sortOrder: string = "",
  dispatch: React.Dispatch<Action>,
  venueId?: string,
  managerName?: string
) => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  console.log("managerName from useFetchVenueByName", managerName);

  useEffect(() => {
    if (!managerName || !token || !apiKey) return;
    const fetchVenueByName = async () => {
      dispatch({ type: "FETCH_VENUES_START" });
      try {
        let url = "";
        if (venueId) {
          url = VENUE_ENDPOINTS.venuesById(venueId);
        } else if (managerName) {
          url = VENUE_ENDPOINTS.allVenuesMadeByProfile(managerName);
        } else if (searchQuery) {
          url = VENUE_ENDPOINTS.searchVenues(searchQuery);
        } else {
          url = VENUE_ENDPOINTS.venues(limit, currentPage, sort, sortOrder);
        }
        console.log("url", url);

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": `${apiKey}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("result from fetchVenueByName", result);

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

    fetchVenueByName();
  }, [apiKey, token, currentPage, searchQuery, limit, sort, sortOrder, dispatch, venueId, managerName]);
};
