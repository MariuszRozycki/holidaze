import { useState, useEffect } from "react";
import { AUTH_ENDPOINTS } from "../../api/authEndpoints";
import { handleError } from "../../utils";

export const useCreateApiKey = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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
      console.log("Result from useCreateApiKey", result);

      localStorage.setItem("API_KEY", result.data.key);

      setIsSuccess(true);
      console.log("API Key created successfully and saved to localStorage!");
    } catch (error) {
      handleError(error, setError);
    } finally {
      setIsLoading(false);
    }
  };

  return { createApiKey, isLoading, error, isSuccess };
};
