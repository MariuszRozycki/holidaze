import { Venue } from "../../types/api";
import { trimText } from "../trimText";

export const getTrimCountryName = (venue: Venue, maxLength = 20): string => {
  const country = venue.location.country;
  return typeof country === "string" && country.length > 0 ? trimText({ text: country, maxLength }) : "Country N/S";
};

export const getTrimCityName = (venue: Venue, maxLength = 20): string => {
  const city = venue.location.city;
  return typeof city === "string" && city.length > 0 ? trimText({ text: city, maxLength }) : "City N/S";
};

export const getFullCountryName = (venue: Venue): string => {
  const country = venue.location.country;
  return typeof country === "string" && country.length > 0 ? country : "Country name not specified";
};

export const getFullCityName = (venue: Venue): string => {
  const city = venue.location.city;
  return typeof city === "string" && city.length > 0 ? city : "City name not specified";
};
