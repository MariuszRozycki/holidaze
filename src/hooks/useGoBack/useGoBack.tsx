import { useNavigate } from "react-router-dom";
import { useKeyPress } from "../useKeyPress/useKeyPress";

export const useGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  useKeyPress("Backspace", () => navigate(-1));

  return handleGoBack;
};
