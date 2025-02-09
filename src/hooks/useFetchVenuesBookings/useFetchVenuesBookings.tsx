import { useEffect } from "react";
import { useAppContext } from "../../context/app/useAppContext";

export const API_BASE_URL = "https://v2.api.noroff.dev";

export const useFetchVenuesBookings = (venueId: string) => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  useEffect(() => {
    console.log("useFetchVenuesBookings:", { venueId, token, apiKey });
    if (!venueId || !token || !apiKey) return;

    const fetchBookings = async () => {
      try {
        const url = `${API_BASE_URL}/holidaze/venues/${venueId}/bookings`;
        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Bookings for venue", venueId, result);
      } catch (error) {
        console.error("Error fetching bookings for venue", venueId, error);
      }
    };

    fetchBookings();
  }, [venueId, token, apiKey]);
};
