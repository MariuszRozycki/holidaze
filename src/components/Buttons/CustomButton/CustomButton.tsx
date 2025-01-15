import { Button } from "react-bootstrap";

export interface CustomButtonProps {
  btnText: string;
  variant?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ btnText, onClick }: CustomButtonProps) => {
  return (
    <>
      <Button className='my-3' onClick={onClick}>
        {btnText}
      </Button>
    </>
  );
};

export default CustomButton;
