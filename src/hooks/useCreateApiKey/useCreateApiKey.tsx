import { useState } from "react";
import { AUTH_ENDPOINTS } from "../../api/authEndpoints";
import { handleError } from "../../utils";
import { useAppContext } from "../../context/app/useAppContext";

export const useCreateApiKey = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { dispatch } = useAppContext();

  const createApiKey = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      if (!accessToken) {
        throw new Error("Access token not found. Please log in again.");
      }

      const userData = JSON.parse(localStorage.getItem("USER_DATA") || "{}");
      if (!userData.name) {
        throw new Error("User name not found in localStorage.");
      }

      const response = await fetch(AUTH_ENDPOINTS.createApiKey(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ name: userData.name }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      dispatch({ type: "SET_API_KEY", payload: result.data.key });
      setIsSuccess(true);
    } catch (error) {
      handleError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  return { createApiKey, isLoading, error, isSuccess };
};
