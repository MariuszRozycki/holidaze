import React, { forwardRef } from "react";
import "./CustomButton.scss";

export interface CustomButtonProps {
  btnText: string;
  variant?: string;
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(({ btnText, onClick, className, ...rest }, ref) => {
  return (
    <button ref={ref} className={`my-custom-button ${className}`} onClick={onClick} {...rest}>
      {btnText}
    </button>
  );
});

export default CustomButton;
