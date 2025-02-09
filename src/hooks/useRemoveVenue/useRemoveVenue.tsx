import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

export const useRemoveVenue = () => {
  const { state, dispatch } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  const removeVenue = async (venueId: string) => {
    if (!venueId || !token || !apiKey) {
      console.error("VenueID, token, or apiKey are not available.");
      return;
    }

    const url = VENUE_ENDPOINTS.venuesById(venueId);

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

      console.log(`Venue with id ${venueId} removed successfully.`);

      dispatch({ type: "REMOVE_VENUE_SUCCESS", payload: venueId });
    } catch (error) {
      console.error("Error removing venue:", error);
    }
  };

  return removeVenue;
};
