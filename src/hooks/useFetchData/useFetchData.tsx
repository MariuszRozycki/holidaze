import { useEffect } from "react";
import { ENDPOINTS } from "../../api/endpoints";
import { VenueResponse } from "../../types/api";
import { Action } from "../../state/AppReducer";

export const useFetchData = (
  currentPage: number,
  searchQuery: string,
  limit: number = 10,
  sort: string = "",
  sortOrder: string = "",
  dispatch: React.Dispatch<Action>
) => {
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_VENUES_START" });

      try {
        const url = searchQuery ? ENDPOINTS.searchVenues(searchQuery) : ENDPOINTS.venues(limit, currentPage, sort, sortOrder);

        console.log("Fetching data from:", url);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: VenueResponse = await response.json();
        dispatch({
          type: "FETCH_VENUES_SUCCESS",
          payload: { data: result.data, meta: result.meta },
        });
      } catch (error) {
        dispatch({
          type: "FETCH_VENUES_ERROR",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    fetchData();
  }, [currentPage, searchQuery, limit, sort, sortOrder, dispatch]);
};

// import { useEffect } from "react";
// import { ENDPOINTS } from "../../api/endpoints";
// import { VenueResponse } from "../../types/api";
// import { Action } from "../../state/AppReducer";

// export const useFetchData = (
//   currentPage: number,
//   dispatch: React.Dispatch<Action>,
//   limit: number = 10,
//   sort: string = "",
//   sortOrder: string = ""
// ) => {
//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: "FETCH_VENUES_START" });
//       try {
//         const response = await fetch(ENDPOINTS.venues(limit, currentPage, sort, sortOrder));
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const result: VenueResponse = await response.json();
//         dispatch({
//           type: "FETCH_VENUES_SUCCESS",
//           payload: { data: result.data, meta: result.meta },
//         });
//       } catch (error) {
//         dispatch({
//           type: "FETCH_VENUES_ERROR",
//           payload: error instanceof Error ? `API Error: ${error.message}` : "Unknown error",
//         });
//       }
//     };

//     fetchData();
//   }, [currentPage, dispatch, limit, sort, sortOrder]);
// };
