import { useState } from "react";
import { AUTH_ENDPOINTS } from "../../api/authEndpoints";

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const registerUser = async (userData: { name: string; email: string; password: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.registerUser(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("result from useRegisterUser", result);

      setIsSuccess(true);
      console.log("User registered successfully:", result);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading, error, isSuccess };
};
