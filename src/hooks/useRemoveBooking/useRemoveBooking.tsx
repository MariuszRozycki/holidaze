import { useAppContext } from "../../context/app/useAppContext";
import { BOOKINGS_ENDPOINTS } from "../../api/bookingEndpoints";

export const useRemoveBooking = () => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  // Funkcja usuwająca rezerwację, przyjmująca bookingId jako argument
  const removeBooking = async (bookingId: string) => {
    if (!bookingId || !token || !apiKey) {
      console.error("Booking id, token lub apiKey nie są dostępne.");
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

      console.log(`Booking with id ${bookingId} removed successfully.`);
    } catch (error) {
      console.error("Error removing booking:", error);
    }
  };

  return removeBooking;
};
