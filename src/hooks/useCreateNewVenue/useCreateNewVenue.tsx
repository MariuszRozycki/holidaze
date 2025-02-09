import { Venue, CreateNewVenueRequest, ApiErrorResponse } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

export const useCreateNewVenue = () => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  const createNewVenue = async (venueData: CreateNewVenueRequest): Promise<Venue | ApiErrorResponse> => {
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

      const result = await response.json();

      if (!response.ok) {
        return result as ApiErrorResponse;
      }

      if ("data" in result) {
        return result.data as Venue;
      }

      throw new Error("Unexpected response structure");
    } catch (error) {
      console.error("Error creating new venue:", error);
      throw error;
    }
  };

  return { createNewVenue };
};
