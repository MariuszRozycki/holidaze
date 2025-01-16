import { useNavigate } from "react-router-dom";

export const useGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return handleGoBack;
};
