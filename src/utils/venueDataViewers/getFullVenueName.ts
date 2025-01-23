import { Venue } from "../../types/api";

export const getFullVenueName = (venue: Venue | null): string => {
  if (!venue || typeof venue.name !== "string" || venue.name.length === 0) {
    return "Venue name N/A";
  }

  const formattedName = venue.name.charAt(0).toUpperCase() + venue.name.slice(1);
  return formattedName;
};
