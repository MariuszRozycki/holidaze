import { useNavigate } from "react-router-dom";
import { useKeyPress } from "../useKeyPress/useKeyPress";

export const useGoToMainPage = () => {
  const navigate = useNavigate();

  const handleGoToMainPage = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/holidaze/");
  };

  useKeyPress("Backspace", () => navigate("/holidaze/"));

  return handleGoToMainPage;
};
