import { Button, Modal } from "react-bootstrap";
import { GuestsCounter } from "../../";

type CustomGuestsCounterModalProps = {
  show?: boolean;
  onHide?: () => void;
};

const CustomGuestCounterModal = ({ show, onHide }: CustomGuestsCounterModalProps) => {
  return (
    <Modal className='custom-guests-counter-modal-width' show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Choose number of guests</Modal.Title>
      </Modal.Header>
      <Modal.Body className='fs-3 text-center mb-3'>
        <GuestsCounter />
        <Button>Close</Button>
      </Modal.Body>
    </Modal>
  );
};

export default CustomGuestCounterModal;
