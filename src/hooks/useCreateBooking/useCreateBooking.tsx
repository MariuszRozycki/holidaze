import { CreateBookingRequest, BookingResponse } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { BOOKINGS_ENDPOINTS } from "../../api/bookingEndpoints";

export const useCreateBooking = () => {
  const { dispatch } = useAppContext();

  const createBooking = async (bookingData: CreateBookingRequest) => {
    try {
      dispatch({ type: "CREATE_NEW_BOOKING_START" });

      const url = BOOKINGS_ENDPOINTS.createNewBooking();

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          "X-Noroff-API-Key": `${localStorage.getItem("API_KEY")}`,
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: { data: BookingResponse } = await response.json();
      dispatch({ type: "CREATE_NEW_BOOKING_SUCCESS", payload: result.data });

      return result.data;
    } catch (error) {
      dispatch({
        type: "CREATE_NEW_BOOKING_ERROR",
        payload: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  return { createBooking };
};
