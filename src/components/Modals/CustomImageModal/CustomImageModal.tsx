import { Modal, Image } from "react-bootstrap";
import "./CustomImageModal.scss";

type CustomImageModalProps = {
  show: boolean;
  onHide: () => void;
  img: string;
  venueName: string | undefined;
};

const CustomImageModal = ({ show, onHide, img, venueName }: CustomImageModalProps) => {
  console.log("hi from ImageModal", img);

  return (
    <Modal
      className='custom-modal-width'
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
