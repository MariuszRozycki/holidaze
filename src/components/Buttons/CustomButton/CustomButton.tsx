import { Button } from "react-bootstrap";
import "./CustomButton.scss";

export interface CustomButtonProps {
  btnText: string;
  variant?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
}

const CustomButton = ({ btnText, onClick, className }: CustomButtonProps) => {
  return (
    <>
      <Button className={`my-custom-button ${className} fs-6 py-2 px-3`} onClick={onClick}>
        {btnText}
      </Button>
    </>
  );
};

export default CustomButton;
