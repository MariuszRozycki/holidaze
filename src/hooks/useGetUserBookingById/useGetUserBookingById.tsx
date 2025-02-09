import { BookingResponse, Meta } from "../../types/api";
import { useEffect } from "react";
import { BOOKINGS_ENDPOINTS } from "../../api/bookingEndpoints";
import { useAppContext } from "../../context/app/useAppContext";

export const useGetUserBookingById = (bookingId: string | undefined) => {
  const { state, dispatch } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  useEffect(() => {
    if (!bookingId || !token || !apiKey) return;

    const getUserBookingById = async () => {
      try {
        dispatch({ type: "FETCH_BOOKING_BY_ID_START" });

        const url = BOOKINGS_ENDPOINTS.getBookingById(bookingId);

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

        const result: { data: BookingResponse[]; meta: Meta } = await response.json();

        dispatch({ type: "FETCH_BOOKING_BY_ID_SUCCESS", payload: { data: result.data } });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "FETCH_BOOKING_BY_ID_ERROR",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    getUserBookingById();
  }, [bookingId, dispatch, apiKey, token]);

  return {
    bookingById: state.bookingById,
    isBookingByIdLoading: state.isLoading,
    bookingByIdError: state.error,
  };
};
