import CustomButton, { CustomButtonProps } from "../CustomButton/CustomButton";
import "./SignUpButton.scss";

const SignUpButton = (props: CustomButtonProps) => {
  return <CustomButton {...props} />;
};

export default SignUpButton;
