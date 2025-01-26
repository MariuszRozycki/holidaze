import { CustomButton } from "../../index";
import "./LogInButton.scss";

type LogInButtonProps = {
  btnText?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
};

const LogInButton = ({ onClick }: LogInButtonProps) => {
  return <CustomButton btnText='Log in!' className='log-in-button mt-5 mx-auto' onClick={onClick} />;
};

export default LogInButton;
