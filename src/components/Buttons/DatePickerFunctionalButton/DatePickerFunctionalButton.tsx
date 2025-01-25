import CustomButton from "../CustomButton/CustomButton";

type DatePickerFunctionalButtonProps = {
  btnText: string;
  onClick?: () => void;
};

const DatePickerFunctionalButton = ({ btnText, onClick }: DatePickerFunctionalButtonProps) => {
  return <CustomButton btnText={btnText} onClick={onClick} />;
};

export default DatePickerFunctionalButton;
