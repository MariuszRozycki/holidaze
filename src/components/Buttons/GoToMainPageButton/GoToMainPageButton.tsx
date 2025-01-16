import { useNavigateToElement } from "../../../hooks";
import CustomButton from "../CustomButton/CustomButton";

const GoToMainPageButton = () => {
  const locationPath = "/holidaze/";
  const handleNavigateTo = useNavigateToElement({ locationPath });

  return (
    <>
      <CustomButton btnText='<< Go to Main Page!' onClick={handleNavigateTo} />
    </>
  );
};

export default GoToMainPageButton;
