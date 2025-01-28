import "./CustomButton.scss";

export interface CustomButtonProps {
  btnText: string;
  variant?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const CustomButton = ({ btnText, onClick, className }: CustomButtonProps) => {
  return (
    <>
      <button className={`my-custom-button ${className} fs-5 py-2 px-3`} onClick={onClick}>
        {btnText}
      </button>
    </>
  );
};

export default CustomButton;
