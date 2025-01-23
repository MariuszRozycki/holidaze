import { Venue } from "../../types/api";

export const getVenueDescription = (venue: Venue | null): string => {
  if (!venue || typeof venue.description !== "string" || venue.description.length === 0) {
    return "Venue description N/A";
  }

  const formattedDescription = venue.description.charAt(0).toUpperCase() + venue.description.slice(1);
  return formattedDescription;
};
