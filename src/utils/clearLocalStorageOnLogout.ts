export const clearLocalStorageOnLogout = () => {
  localStorage.removeItem("ACCESS_TOKEN");
  localStorage.removeItem("API_KEY");
  localStorage.removeItem("USER_DATA");
  localStorage.removeItem("VENUE_STATE");
};
