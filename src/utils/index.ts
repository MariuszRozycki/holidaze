import { trimText } from "./trimText";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleImageError } from "./handleImageError";
import { handleError } from "./handleError/handleError";
import { clearLocalStorageOnLogout } from "./clearLocalStorageOnLogout";

import {
  getImageUrl,
  getTrimCountryName,
  getFullCountryName,
  getFullCityName,
  getTrimCityName,
  getTrimVenueName,
  getFullVenueName,
  getPricePerNight,
  getMaxGuests,
  getVenueOwnerInfo,
  getVenueDescription,
  getDatesInRange,
  getSelectedDates,
} from "./venueDataViewers";

export {
  trimText,
  capitalizeFirstLetter,
  handleImageError,
  getImageUrl,
  getTrimCountryName,
  getTrimCityName,
  getFullCountryName,
  getFullCityName,
  getTrimVenueName,
  getFullVenueName,
  getPricePerNight,
  getMaxGuests,
  getVenueOwnerInfo,
  getVenueDescription,
  getDatesInRange,
  getSelectedDates,
  handleError,
  clearLocalStorageOnLogout,
};
