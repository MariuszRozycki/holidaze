import { Profile } from "../../types/api";
import { useAppContext } from "../../context/app/useAppContext";
import { PROFILE_ENDPOINTS } from "../../api/profileEndpoints";

export const useUpdateProfile = () => {
  const { state, dispatch } = useAppContext();
  const userName = state.userProfile?.name ?? "";

  const updateProfile = async (updatedData: Partial<Profile>) => {
    if (!userName) {
      dispatch({ type: "UPDATE_USER_PROFILE_ERROR", payload: "User name is missing" });
      return;
    }

    try {
      dispatch({ type: "UPDATE_USER_PROFILE_START" });

      const url = PROFILE_ENDPOINTS.updateProfileByName(userName);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
          "X-Noroff-API-Key": `${localStorage.getItem("API_KEY")}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: { data: Profile } = await response.json();
      dispatch({ type: "UPDATE_USER_PROFILE_SUCCESS", payload: result.data });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_PROFILE_ERROR",
        payload: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  return { updateProfile };
};
