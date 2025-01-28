import { useState } from "react";
import { ENDPOINTS } from "../../api/venueEndpoints";

const useAuthenticationWithToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  return <></>;
};

export default useAuthenticationWithToken;
