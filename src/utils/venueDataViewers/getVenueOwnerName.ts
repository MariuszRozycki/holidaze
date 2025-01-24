import { capitalizeFirstLetter } from "../capitalizeFirstLetter";
export const getVenueOwnerName = (venueOwner: string) => {
  if (!venueOwner || venueOwner !== "string" || venueOwner.length === 0) {
    return "Owner not specified";
  }

  return capitalizeFirstLetter({ text: venueOwner });
};
