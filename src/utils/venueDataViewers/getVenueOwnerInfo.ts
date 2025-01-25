import { Media, Venue } from "../../types/api";
import { capitalizeFirstLetter } from "../capitalizeFirstLetter";
import noImage from "../../assets/images/no-image.webp";

interface OwnerInfo {
  name: string;
  avatar: Media;
}

export const getVenueOwnerInfo = (venue: Venue | null): OwnerInfo => {
  if (!venue || typeof venue.owner.name !== "string" || venue.owner.name.length === 0) {
    return {
      name: "Owner not specified",
      avatar: {
        url: noImage,
        alt: "No image available",
      },
    };
  }

  return {
    name: capitalizeFirstLetter({ text: venue.owner.name }),
    avatar: venue.owner.avatar?.url
      ? venue.owner.avatar
      : {
          url: noImage,
          alt: "No image available",
        },
  };
};
