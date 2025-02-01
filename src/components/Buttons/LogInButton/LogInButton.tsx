import { CustomButton } from "../../index";
import "./LogInButton.scss";

type LogInButtonProps = {
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const LogInButton = ({ onClick, type, disabled }: LogInButtonProps) => {
  return <CustomButton btnText='Log in!' type={type} className='log-in-button mt-5' onClick={onClick} disabled={disabled} />;
};

export default LogInButton;
