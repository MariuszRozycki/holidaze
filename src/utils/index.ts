import { trimText } from "./trimText";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { handleImageError } from "./handleImageError";
import { handleError } from "./handleError/handleError";
import { clearLocalStorageOnLogout } from "./clearLocalStorageOnLogout";
import { fetchVenueDetailsById } from "./fetchVenueDetailsById";
import { newVenueFormValidation, hasErrors } from "./newVenueFormValidation/newVenueFormValidation";
// @ts-ignore
import { ErrorMessageAuth } from "./ErrorMessageAuth";

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
  fetchVenueDetailsById,
  newVenueFormValidation,
  hasErrors,
  ErrorMessageAuth,
};
