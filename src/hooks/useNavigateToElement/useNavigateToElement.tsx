import { useNavigate } from "react-router-dom";

interface LocationPathProps {
  locationPath: string;
}

export const useNavigateToElement = ({ locationPath }: LocationPathProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(locationPath);
  };

  return handleNavigate;
};
