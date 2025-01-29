import { API_BASE_URL } from "./config";

export const PROFILE_ENDPOINTS = {
  profilesByName: (name: string) =>
    `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name).toLocaleLowerCase()}?_bookings=true&_venues=true`,
  updateProfileByName: (name: string) => `${API_BASE_URL}/holidaze/profiles/${encodeURIComponent(name).toLocaleLowerCase()}`,
};
