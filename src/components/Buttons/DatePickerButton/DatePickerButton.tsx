import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CustomDatePickerModal } from "../../Modals";
import "./DatePickerButton.scss";
import { Container } from "react-bootstrap";

type DataPickerButtonProps = {
  className?: string;
};

const DatePickerButton = ({ className }: DataPickerButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDatePicker = () => {
    setIsModalOpen(true);
    console.log("Date picker activated!");
  };

  const handleCloseDatePicker = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='data-picker-button-wrapper'>
      <Container>
        <CustomButton className={className} btnText='Select dates' onClick={handleOpenDatePicker} />
      </Container>
      {isModalOpen && <CustomDatePickerModal show={isModalOpen} onHide={handleCloseDatePicker} fullscreen='sm-down' />}
    </div>
  );
};

export default DatePickerButton;
