import { Venue } from "../types/api";

export const getImageUrl = (venue: Venue): string => {
  return venue.media.length > 0 && venue.media[0].url ? venue.media[0].url : `../assets/images/no-image.webp`;
};
