import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CustomDatePickerModal } from "../../Modals";

const DatePickerButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDatePicker = () => {
    setIsModalOpen(true);
    console.log("Date picker activated!");
  };

  const handleCloseDatePicker = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton btnText='Select dates' onClick={handleOpenDatePicker} />

      {isModalOpen && <CustomDatePickerModal show={isModalOpen} onHide={handleCloseDatePicker} fullscreen='md-down' />}
    </>
  );
};

export default DatePickerButton;
