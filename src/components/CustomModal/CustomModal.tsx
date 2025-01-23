import { Modal, Image } from "react-bootstrap";
import "./CustomModal.scss";

type CustomModalProps = {
  show: boolean;
  onHide: () => void;
  img: string;
  venueName: string | undefined;
};

const CustomModal = ({ show, onHide, img, venueName }: CustomModalProps) => {
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

export default CustomModal;
