import { useState } from "react";
import { AUTH_ENDPOINTS } from "../../api/authEndpoints";

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const registerUser = async (userData: { name: string; email: string; password: string; venueManager?: boolean }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.registerUser(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          name: userData.name.toLowerCase(),
          email: userData.email.toLowerCase(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();

      setIsSuccess(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error, isSuccess };
};
