import { useState } from "react";
import { useAppContext } from "../../../context/app/useAppContext";
import { CustomButton, CustomLoginRequiredModal } from "../../";
import "./BookVenueNotLoggedButton.scss";

const BookVenueNotLoggedButton = () => {
  const { state } = useAppContext();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <CustomButton btnText='Book venue' onClick={handleShow} className='book-venue-not-logged-button' />
      {state.userProfile === null ? <CustomLoginRequiredModal show={show} onHide={handleClose} /> : null}
    </>
  );
};

export default BookVenueNotLoggedButton;
