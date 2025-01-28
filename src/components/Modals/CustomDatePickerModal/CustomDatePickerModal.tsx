import { useAppContext } from "../../../context/app/useAppContext";
import { Modal } from "react-bootstrap";
import { DatePicker } from "../../index";
import { getFullVenueName, getSelectedDates } from "../../../utils";
import "./CustomDatePickerModal.scss";

type CustomDatePickerModalProps = {
  show: boolean;
  onHide: () => void;
  fullscreen?: true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
};

const CustomDatePickerModal = ({ show, onHide, fullscreen }: CustomDatePickerModalProps) => {
  const { state } = useAppContext();
  const { selectedVenue, selectedDates } = state;

  return (
    <Modal
      className='custom-date-picker-modal-width m-0'
      dialogClassName='rounded-modal-dialog'
      show={show}
      onHide={onHide}
      aria-labelledby='example-custom-modal-styling-title'
      fullscreen={fullscreen}
    >
      <Modal.Header className='flex-column flex-start align-items-start' closeButton>
        <div>{getFullVenueName(selectedVenue)}</div>
        <div>{getSelectedDates(selectedDates)}</div>
      </Modal.Header>
      <Modal.Body>
        <DatePicker onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};

export default CustomDatePickerModal;
