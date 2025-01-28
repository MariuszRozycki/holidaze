import { Profile } from "../../types/api";
import { useEffect } from "react";
import { PROFILE_ENDPOINTS } from "../../api/profileEndpoints";
import { useAppContext } from "../../context/app/useAppContext";

export const useFetchProfile = (name: string) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        dispatch({ type: "FETCH_USER_PROFILE_START" });

        const url = PROFILE_ENDPOINTS.profilesByName(name);

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
            "X-Noroff-API-Key": `${localStorage.getItem("API_KEY")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: { data: Profile } = await response.json();
        dispatch({ type: "SET_USER_PROFILE_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({
          type: "FETCH_USER_PROFILE_ERROR",
          payload: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    if (name) {
      fetchProfile();
    }
  }, [name, dispatch]);

  return {
    profile: state.userProfile,
    isLoading: state.isLoading,
    error: state.error,
  };
};
