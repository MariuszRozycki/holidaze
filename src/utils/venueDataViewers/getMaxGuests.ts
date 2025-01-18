import { Venue } from "../../types/api";

export const getMaxGuests = (venue: Venue): number => {
  const maxGuests = venue.maxGuests;
  return typeof maxGuests === "number" ? maxGuests : 1;
};
