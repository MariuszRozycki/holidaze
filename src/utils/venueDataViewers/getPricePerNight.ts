import { Venue } from "../../types/api";

export const getPricePerNight = (venue: Venue): number => {
  const pricePerNight = venue.price;
  return typeof pricePerNight === "number" ? Math.round(pricePerNight) : 0;
};
