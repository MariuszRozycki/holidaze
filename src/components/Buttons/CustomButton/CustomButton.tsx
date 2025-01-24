import { Button } from "react-bootstrap";
import "./CustomButton.scss";

export interface CustomButtonProps {
  btnText: string;
  variant?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ btnText, onClick }: CustomButtonProps) => {
  return (
    <>
      <Button className='my-custom-button fs-3 py-2 px-3 my-4' onClick={onClick}>
        {btnText}
      </Button>
    </>
  );
};

export default CustomButton;
