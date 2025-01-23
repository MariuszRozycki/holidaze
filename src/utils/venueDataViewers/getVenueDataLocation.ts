import { Venue } from "../../types/api";
import { trimText } from "../trimText";

export const getTrimCountryName = (venue: Venue | null, maxLength = 20): string => {
  if (!venue || typeof venue.location.country !== "string" || venue.location.country.length === 0) {
    return "Country N/S";
  }

  const country = venue.location.country;
  const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return trimText({ text: formattedCountry, maxLength });
};

export const getTrimCityName = (venue: Venue | null, maxLength = 20): string => {
  if (!venue || typeof venue.location.city !== "string" || venue.location.city.length === 0) {
    return "City N/S";
  }

  const city = venue.location.city;
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  return trimText({ text: formattedCity, maxLength });
};

export const getFullCountryName = (venue: Venue | null): string => {
  if (!venue || typeof venue.location.country !== "string" || venue.location.country.length === 0) {
    return "Country not specified";
  }

  const country = venue.location.country;
  const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

  return formattedCountry;
};

export const getFullCityName = (venue: Venue | null): string => {
  if (!venue || typeof venue.location.city !== "string" || venue.location.city.length === 0) {
    return "City name not specified";
  }

  const city = venue.location.city;
  const formattedCity = city.charAt(1).toUpperCase() + city.slice(1);

  return formattedCity;
};
