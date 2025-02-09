import { Venue } from "../../types/api";
import noImage from "../../assets/images/no-image.webp";

export const getImageUrl = (venue: Venue): string => {
  return venue.media.length > 0 && venue.media[0].url ? venue.media[0].url : noImage;
};
