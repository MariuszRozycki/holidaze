import { useState } from "react";
import { useAppContext } from "../../context/app/useAppContext";
import { BOOKINGS_ENDPOINTS } from "../../api/bookingEndpoints";

export const useRemoveBooking = () => {
  const { state, dispatch } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;
  const [refreshBookings, setRefreshBookings] = useState(false);

  const removeBooking = async (bookingId: string) => {
    if (!bookingId || !token || !apiKey) {
      return;
    }

    const url = BOOKINGS_ENDPOINTS.removeBooking(bookingId);

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      dispatch({ type: "REMOVE_BOOKING_BY_ID", payload: { bookingId: bookingId } });
      setRefreshBookings((prev) => !prev);
    } catch (error) {
      console.error("Error removing booking:", error);
    }
  };

  return removeBooking;
};
