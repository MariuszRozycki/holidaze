import { BookingResponse, Meta } from "../../types/api";
import { useEffect } from "react";
import { PROFILE_ENDPOINTS } from "../../api/profileEndpoints";
import { useAppContext } from "../../context/app/useAppContext";

export const useFetchBookingsByName = (name: string) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const fetchBookingsByName = async () => {
      try {
        dispatch({ type: "FETCH_BOOKINGS_BY_NAME_START" });

        const url = PROFILE_ENDPOINTS.allBookingsMadeByName(name);

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
            "X-Noroff-API-Key": `${localStorage.getItem("API_KEY")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: { data: BookingResponse[]; meta: Meta } = await response.json();

        dispatch({ type: "FETCH_BOOKINGS_BY_NAME_SUCCESS", payload: result });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "FETCH_BOOKINGS_BY_NAME_ERROR",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    if (name) {
      fetchBookingsByName();
    }
  }, [name, dispatch]);

  return {
    userBookings: state.userBookings,
    isLoading: state.isLoading,
    error: state.error,
  };
};
