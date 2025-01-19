import CustomButton from "../CustomButton/CustomButton";
import { useGoBack } from "../../../hooks";

const GoToMainPageButton = () => {
  const handleGoToMainPage = useGoBack();

  return <CustomButton btnText='<< Go to Main Page!' onClick={handleGoToMainPage} />;
};

export default GoToMainPageButton;
