import { Venue, CreateNewVenueRequest, ApiErrorResponse } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";
import { Container } from "react-bootstrap";

export const useUpdateVenue = (venueId: string) => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  const updateVenue = async (venueData: CreateNewVenueRequest): Promise<Venue | ApiErrorResponse> => {
    if (!venueId) {
      <Container>
        <p>VenueId doesn't exists!</p>
      </Container>;
    }

    try {
      const url = VENUE_ENDPOINTS.venuesById(venueId);

      const response = await fetch(url, {
        method: "PUT",
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

  return { updateVenue };
};
