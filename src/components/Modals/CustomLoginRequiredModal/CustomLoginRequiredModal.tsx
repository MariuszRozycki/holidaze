import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { LogInButton, SignUpButton } from "../../Buttons";
import { useNavigateToElement } from "../../../hooks";
import "./CustomLoginRequiredModal.scss";

type CustomLoginRequiredModalProps = {
  show: boolean;
  onHide: () => void;
};

const CustomLoginRequiredModal = ({ show, onHide }: CustomLoginRequiredModalProps) => {
  const locationPathLogin = "/holidaze/login-as-page/login-as-customer-page";
  const locationPathSignUp = "/holidaze/sign-up-page/sign-up-as-customer-page";
  const handleNavigateToLogin = useNavigateToElement({ locationPath: locationPathLogin });
  const handleNavigateToSignUp = useNavigateToElement({ locationPath: locationPathSignUp });

  return (
    <>
      <Modal className='custom-login-required-modal-width' show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-3 text-center mb-3'>
          <span className='d-block mb-2 fw-semibold'>You are not logged!</span> Log in as a customer or sign up first to create venue
          reservation.
          <LogInButton className='mb-2' onClick={handleNavigateToLogin} />
          <SignUpButton onClick={handleNavigateToSignUp} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomLoginRequiredModal;
