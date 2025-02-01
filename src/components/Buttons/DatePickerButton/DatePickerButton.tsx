import { useState, forwardRef } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CustomDatePickerModal } from "../../Modals";
import "./DatePickerButton.scss";
import { Container } from "react-bootstrap";

type DataPickerButtonProps = {
  className?: string;
};

const DatePickerButton = forwardRef<HTMLButtonElement, DataPickerButtonProps>(({ className }: DataPickerButtonProps, ref) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenDatePicker = () => {
    setIsModalOpen(true);
  };

  const handleCloseDatePicker = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='data-picker-button-wrapper d-sm-none'>
      <Container>
        <CustomButton ref={ref} className={className} btnText='Select dates' onClick={handleOpenDatePicker} />
      </Container>
      {isModalOpen && <CustomDatePickerModal show={isModalOpen} onHide={handleCloseDatePicker} fullscreen='sm-down' />}
    </div>
  );
});

export default DatePickerButton;
