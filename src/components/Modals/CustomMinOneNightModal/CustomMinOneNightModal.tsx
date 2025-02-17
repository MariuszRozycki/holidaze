import { Modal, Button } from "react-bootstrap";
import "./CustomMinOneNightModal.scss";

type CustomMinOneNightModalProps = {
  show: boolean;
  onHide: () => void;
};

const CustomMinOneNightModal = ({ show, onHide }: CustomMinOneNightModalProps) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='confirm-logout-modal-title'
      backdrop='static'
      className='min-one-night-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id='confirm-logout-modal-title'>Minium one night.</Modal.Title>
      </Modal.Header>

      <Modal.Body>Please select at least one night!</Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomMinOneNightModal;
