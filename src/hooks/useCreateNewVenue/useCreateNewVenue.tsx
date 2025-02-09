import { Venue, CreateNewVenueRequest, ApiErrorResponse } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { VENUE_ENDPOINTS } from "../../api/venueEndpoints";

export const useCreateNewVenue = () => {
  const { state } = useAppContext();
  const token = state.accessToken;
  const apiKey = state.apiKey;

  // const createNewVenue = async (venueData: CreateNewVenueRequest): Promise<Venue | undefined> => {
  //   try {
  //     const url = VENUE_ENDPOINTS.createNewVenue();

  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //         "X-Noroff-API-Key": `${apiKey}`,
  //       },
  //       body: JSON.stringify(venueData),
  //     });

  //     if (!response.ok) {
  //       const errorResponse = await response.json();
  //       console.log(errorResponse);

  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const result: { data: Venue } = await response.json();

  //     return result.data;
  //   } catch (error) {
  //     console.log(error);

  //     console.error("Error creating new venue:", error);
  //   }
  // };

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

      // Jeśli odpowiedź nie jest OK, zwróć błędy API
      if (!response.ok) {
        return result as ApiErrorResponse;
      }

      // Upewnij się, że wynik zawiera właściwość `data` w przypadku sukcesu
      if ("data" in result) {
        return result.data as Venue;
      }

      // W przypadku niespodziewanej struktury odpowiedzi, rzuć błąd
      throw new Error("Unexpected response structure");
    } catch (error) {
      console.error("Error creating new venue:", error);
      throw error; // Rzuć błąd w przypadku problemów sieciowych
    }
  };

  return { createNewVenue };
};
