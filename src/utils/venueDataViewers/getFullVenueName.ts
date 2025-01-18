import { Venue } from "../../types/api";

export const getFullVenueName = (venue: Venue): string => {
  const venueName = venue.name;

  return typeof venueName === "string" && venueName.length > 0 ? venue.name : "Venue name not available";
};
