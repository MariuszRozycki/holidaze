import { Venue, CreateNewVenueRequest } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

export const useCreateNewVenue = () => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  const createNewVenue = async (venueData: CreateNewVenueRequest): Promise<Venue | undefined> => {
    try {
      const url = VENUE_ENDPOINTS.createNewVenue();

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": `${apiKey}`,
        },
        body: JSON.stringify(venueData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: { data: Venue } = await response.json();

      return result.data;
    } catch (error) {
      console.error("Error creating new venue:", error);
    }
  };

  return { createNewVenue };
};
