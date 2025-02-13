import { Modal, Button } from "react-bootstrap";

type CustomLogOutModalProps = {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
};

const CustomLogOutModal = ({ show, onHide, onConfirm }: CustomLogOutModalProps) => {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby='confirm-logout-modal-title' backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-logout-modal-title'>Confirm Logout</Modal.Title>
      </Modal.Header>

      <Modal.Body>Are you sure you want to log out?</Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='primary' onClick={onConfirm}>
          Log out
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomLogOutModal;
