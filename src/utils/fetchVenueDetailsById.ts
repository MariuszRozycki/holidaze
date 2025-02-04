import { VENUE_ENDPOINTS } from "../api/venueEndpoints";
import { Venue } from "../types/api";

export async function fetchVenueDetailsById(venueId: string): Promise<Venue> {
  const url = VENUE_ENDPOINTS.venuesById(venueId);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();

  return result.data;
}
