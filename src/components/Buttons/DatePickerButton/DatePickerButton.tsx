import CustomButton from "../CustomButton/CustomButton";

const DatePickerButton = () => {
  const handleOpenDatePicker = () => {
    console.log("Data picker activated!");
  };

  return <CustomButton btnText='Select dates' onClick={handleOpenDatePicker} />;
};

export default DatePickerButton;
