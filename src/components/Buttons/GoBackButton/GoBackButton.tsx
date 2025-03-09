import CustomButton from "../CustomButton/CustomButton";
import { useGoBack } from "../../../hooks";
import "./GoBackButton.scss";

const GoBackButton = () => {
  const handleGoBack = useGoBack();

  return <CustomButton variant='warning' btnText='<< Go back!' className='go-back-button mb-3' onClick={handleGoBack} />;
};

export default GoBackButton;
