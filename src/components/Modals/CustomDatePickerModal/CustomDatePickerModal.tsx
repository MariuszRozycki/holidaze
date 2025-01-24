import { DatePicker } from "../../index";
import { Modal } from "react-bootstrap";
import "./CustomDatePickerModal.scss";

type CustomDatePickerModalProps = {
  show: boolean;
  onHide: () => void;
  fullscreen?: true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
};

const CustomDatePickerModal = ({ show, onHide, fullscreen }: CustomDatePickerModalProps) => {
  return (
    <Modal
      className='custom-modal-width'
      dialogClassName='rounded-modal-dialog'
      show={show}
      onHide={onHide}
      aria-labelledby='example-custom-modal-styling-title'
      fullscreen={fullscreen}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <DatePicker />
      </Modal.Body>
    </Modal>
  );
};

export default CustomDatePickerModal;
