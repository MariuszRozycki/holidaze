import { useEffect, useState } from "react";
import { PROFILE_ENDPOINTS } from "../../api/profileEndpoints";
import { handleError } from "../../utils";
import { Profile } from "../../types/api";

interface UseFetchProfileReturn {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchProfile = (name: string): UseFetchProfileReturn => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = PROFILE_ENDPOINTS.profilesByName(name);
        console.log("Generated URL: ", url);

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
        setProfile(result.data);
      } catch (error) {
        handleError(error, setError);
      } finally {
        setIsLoading(false);
      }
    };

    if (name) {
      fetchProfile();
    }
  }, [name]);

  return { profile, isLoading, error };
};
