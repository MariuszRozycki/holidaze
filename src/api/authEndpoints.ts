import { API_BASE_URL } from "./config";

export const AUTH_ENDPOINTS = {
  createApiKey: () => `${API_BASE_URL}/auth/create-api-key`,
  registerUser: () => `${API_BASE_URL}/auth/register`,
  loginUser: () => `${API_BASE_URL}/auth/login?_holidaze=true`,
};
