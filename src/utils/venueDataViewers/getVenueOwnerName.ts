import { capitalizeFirstLetter } from "../capitalizeFirstLetter";
export const getVenueOwnerName = (venueOwnerName: string) => {
  if (!venueOwnerName || venueOwnerName !== "string" || venueOwnerName.length === 0) {
    return "Owner not specified";
  }

  return capitalizeFirstLetter({ text: venueOwnerName });
};
