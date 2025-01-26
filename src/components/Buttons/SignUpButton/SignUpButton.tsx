import CustomButton from "../CustomButton/CustomButton";
import "./SignUpButton.scss";

type SignUpButtonProps = {
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
};

const SignUpButton = ({ onClick, className, type }: SignUpButtonProps) => {
  return <CustomButton btnText='Sign up!' type={type} className={`sign-up-button ${className}`} onClick={onClick} />;
};

export default SignUpButton;
