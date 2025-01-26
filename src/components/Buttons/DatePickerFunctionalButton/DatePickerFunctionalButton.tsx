import CustomButton from "../CustomButton/CustomButton";
import "./DatePickerFunctionalButton.scss";

type DatePickerFunctionalButtonProps = {
  btnText: string;
  onClick?: () => void;
};

const DatePickerFunctionalButton = ({ btnText, onClick }: DatePickerFunctionalButtonProps) => {
  return <CustomButton btnText={btnText} className='data-picker-functional-button' onClick={onClick} />;
};

export default DatePickerFunctionalButton;
