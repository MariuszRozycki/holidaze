import { useState } from "react";
import { AUTH_ENDPOINTS } from "../../api/authEndpoints";
import { useAppContext } from "../../context/app/useAppContext";
import { handleError } from "../../utils";

export const useLoginUser = () => {
  const { dispatch } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const loginUser = async (userData: { email: string; password: string; venueManager?: boolean }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(AUTH_ENDPOINTS.loginUser(), {
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
      console.log("result from useLoginUser: ", result);
      const loggedUserData = {
        name: result.data.name,
        email: result.data.email,
      };

      if (result.data && result.data.accessToken) {
        localStorage.setItem("ACCESS_TOKEN", result.data.accessToken);
        localStorage.setItem("USER_DATA", JSON.stringify(loggedUserData));
        dispatch({ type: "SET_ACCESS_TOKEN", payload: result.data.accessToken });
        dispatch({
          type: "SET_USER_DATA",
          payload: {
            name: result.data.name.toLowerCase(),
            email: result.data.email.toLowerCase(),
          },
        });
        dispatch({ type: "SET_USER_PROFILE_SUCCESS", payload: result.data });

        setIsSuccess(true);
      }
    } catch (error) {
      handleError(error, setError);
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };
  return { loginUser, isLoading, error, isSuccess };
};
