import { API_BASE_URL } from "./config";

export const PROFILE_ENDPOINTS = {
  profilesByName: (name: string) =>
    `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name).toLocaleLowerCase()}?_bookings=true&_venues=true`,
  // profiles: (limit: number = 10, page: number = 1, sort: string = "", sortOrder: string = "") => {
  //   let url = `${API_BASE_URL}/holidaze/profiles?limit=${limit}&page=${page}`;
  //   if (sort) {
  //     url += `&sort=${encodeURIComponent(sort)}`;
  //   }
  //   if (sortOrder) {
  //     url += `&sortOrder=${encodeURIComponent(sortOrder)}`;
  //   }
  //   url += `&_bookings=true&_venues=true`;
  //   return url;
  // },
  // profilesByName: (name: string) => `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name)}?_bookings=true&_venues=true`,
  // searchProfiles: (query: string, limit: number = 10, page: number = 1, sort: string = "", sortOrder: string = "") => {
  //   let url = `${API_BASE_URL}/holidaze/profiles/search?limit=${limit}&page=${page}`;
  //   if (sort) {
  //     url += `&sort=${encodeURIComponent(sort)}`;
  //   }
  //   if (sortOrder) {
  //     url += `&sortOrder=${encodeURIComponent(sortOrder)}`;
  //   }
  //   if (query) {
  //     url += `&q=${encodeURIComponent(query)}`;
  //   }
  //   url += `&_bookings=true&_venues=true`;
  //   return url;
  // },
  // profilesByNameVenues: (name: string, limit: number = 10, page: number = 1, sort: string = "", sortOrder: string = "") => {
  //   let url = `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name)}/venues?limit=${limit}&page=${page}`;
  //   if (sort) {
  //     url += `&sort=${encodeURIComponent(sort)}`;
  //   }
  //   if (sortOrder) {
  //     url += `&sortOrder=${encodeURIComponent(sortOrder)}`;
  //   }
  //   url += `&_owner=true&_bookings=true`;
  //   return url;
  // },
  // profilesByNameBookings: (name: string, limit: number = 10, page: number = 1, sort: string = "", sortOrder: string = "") => {
  //   let url = `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name)}/bookings?limit=${limit}&page=${page}`;
  //   if (sort) {
  //     url += `&sort=${encodeURIComponent(sort)}`;
  //   }
  //   if (sortOrder) {
  //     url += `&sortOrder=${encodeURIComponent(sortOrder)}`;
  //   }
  //   url += `&_customer=true&_venue=true`;
  //   return url;
  // },
};
