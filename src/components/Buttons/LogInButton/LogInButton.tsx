import { CustomButton } from "../../index";
import "./LogInButton.scss";

type LogInButtonProps = {
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
};

const LogInButton = ({ onClick, type }: LogInButtonProps) => {
  return <CustomButton btnText='Log in!' type={type} className='log-in-button mt-5 mx-auto' onClick={onClick} />;
};

export default LogInButton;
