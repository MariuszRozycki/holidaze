import { Venue } from "../../types/api";
import { trimText } from "../trimText";

export const getTrimVenueName = (venue: Venue, maxLength = 27): string => {
  const venueName = venue.name;

  return typeof venueName === "string" && venueName.length > 0 ? trimText({ text: venue.name, maxLength }) : "Venue name N/A";
};
