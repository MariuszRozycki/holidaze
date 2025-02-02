import { API_BASE_URL } from "./config";

export const BOOKINGS_ENDPOINTS = {
  createNewBooking: () => `${API_BASE_URL}/holidaze/bookings?_customer=true&_venue=true`,
};
