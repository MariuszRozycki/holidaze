import { API_BASE_URL } from "./config";

export const VENUE_ENDPOINTS = {
  venues: (limit: number, page: number, sort: string = "", sortOrder: string = "") => {
    let url = `${API_BASE_URL}/holidaze/venues?limit=${limit}&page=${page}`;
    if (sort) {
      url += `&sort=${sort}`;
    }
    if (sortOrder) {
      url += `&sortOrder=${sortOrder}`;
    }
    return url;
  },
  searchVenues: (query: string) => `${API_BASE_URL}/holidaze/venues/search?q=${encodeURIComponent(query)}`,
  venuesById: (id: string) => `${API_BASE_URL}/holidaze/venues/${id}?_owner=true&_bookings=true`,
};
