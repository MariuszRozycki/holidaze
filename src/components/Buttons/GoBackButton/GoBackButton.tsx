import CustomButton from "../CustomButton/CustomButton";
import { useGoBack } from "../../../hooks";
import "./GoBackButton.scss";

const GoBackButton = () => {
  const handleGoBack = useGoBack();

  return <CustomButton variant='warning' btnText='<<' className='go-back-button' onClick={handleGoBack} />;
};

export default GoBackButton;
