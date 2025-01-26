import { useKeyPress } from "../useKeyPress/useKeyPress";
import { useNavigate } from "react-router-dom";

export const useGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  useKeyPress("Backspace", (e: KeyboardEvent) => {
    const activeElement = document.activeElement;

    if (
      activeElement &&
      (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") &&
      !(activeElement as HTMLInputElement).readOnly
    ) {
      return;
    }

    e.preventDefault();
    navigate(-1);
  });

  return handleGoBack;
};
