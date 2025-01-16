import { useNavigate } from "react-router-dom";

interface locationPathProps {
  locationPath: string;
}

export const useNavigateToElement = ({ locationPath }: locationPathProps) => {
  const navigate = useNavigate();
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(locationPath);
  };

  return handleNavigate;
};
