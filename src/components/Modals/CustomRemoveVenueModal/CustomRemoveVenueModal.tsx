import { Modal, Button } from "react-bootstrap";

type CustomRemoveVenueModalProps = {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
};

const CustomRemoveVenueModal = ({ show, onHide, onConfirm }: CustomRemoveVenueModalProps) => {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby='confirm-logout-modal-title' backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title id='confirm-logout-modal-title'>Confirm venue remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>Are you sure you want to remove venue?</Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Cancel
        </Button>
        <Button variant='primary' onClick={onConfirm}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomRemoveVenueModal;
