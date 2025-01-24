import { Venue } from "../../types/api";
import { trimText } from "../trimText";

export const getTrimVenueName = (venue: Venue | null, maxLength = 20): string => {
  if (!venue || typeof venue.name !== "string" || venue.name.length === 0) {
    return "Venue name N/A";
  }

  const formattedName = venue.name.charAt(0).toUpperCase() + venue.name.slice(1);
  return trimText({ text: formattedName, maxLength });
};
