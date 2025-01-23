import { Venue } from "../../types/api";
import { trimText } from "../trimText";
import { capitalizeFirstLetter } from "../capitalizeFirstLetter";

export const getTrimCountryName = (venue: Venue | null, maxLength = 20): string => {
  if (!venue || typeof venue.location.country !== "string" || venue.location.country.length === 0) {
    return "Country N/S";
  }

  const country = venue.location.country;
  const formattedCountry = capitalizeFirstLetter({ text: country });

  return trimText({ text: formattedCountry, maxLength });
};

export const getTrimCityName = (venue: Venue | null, maxLength = 20): string => {
  if (!venue || typeof venue.location.city !== "string" || venue.location.city.length === 0) {
    return "City N/S";
  }

  const city = venue.location.city;
  const formattedCity = capitalizeFirstLetter({ text: city });

  return trimText({ text: formattedCity, maxLength });
};

export const getFullCountryName = (venue: Venue | null): string => {
  if (!venue || typeof venue.location.country !== "string" || venue.location.country.length === 0) {
    return "Country not specified";
  }

  const country = venue.location.country;
  const formattedCountry = capitalizeFirstLetter({ text: country });

  return formattedCountry;
};

export const getFullCityName = (venue: Venue | null): string => {
  if (!venue || typeof venue.location.city !== "string" || venue.location.city.length === 0) {
    return "City name not specified";
  }

  const city = venue.location.city;
  const formattedCity = capitalizeFirstLetter({ text: city });

  return formattedCity;
};
