import { Venue } from "../../types/api";

export const getImageUrl = (venue: Venue): string => {
  return venue.media.length > 0 && venue.media[0].url
    ? venue.media[0].url
    : `https://raw.githubusercontent.com/MariuszRozycki/holidaze/refs/heads/master/src/assets/images/no-image.webp`;
};
