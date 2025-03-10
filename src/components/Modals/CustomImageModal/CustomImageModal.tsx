import { Modal, Image } from "react-bootstrap";
import "./CustomImageModal.scss";

type CustomImageModalProps = {
  show: boolean;
  onHide: () => void;
  img: string;
  venueName: string | undefined;
};

const CustomImageModal = ({ show, onHide, img, venueName }: CustomImageModalProps) => {
  return (
    <Modal
      className='custom-image-modal-width'
      dialogClassName='rounded-modal-dialog'
      show={show}
      onHide={onHide}
      aria-labelledby='example-custom-modal-styling-title'
    >
      <Modal.Header closeButton>{venueName}</Modal.Header>
      <Modal.Body>
        <Image className='rounded-4' src={img} alt='Selected Venue Image' fluid />
      </Modal.Body>
    </Modal>
  );
};

export default CustomImageModal;
