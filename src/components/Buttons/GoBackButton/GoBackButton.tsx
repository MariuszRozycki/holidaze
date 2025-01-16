import CustomButton from "../CustomButton/CustomButton";
import { useGoBack } from "../../../hooks";

const GoBackButton = () => {
  const handleGoBack = useGoBack();

  return <CustomButton btnText='<< Go back!' onClick={handleGoBack} />;
};

export default GoBackButton;
