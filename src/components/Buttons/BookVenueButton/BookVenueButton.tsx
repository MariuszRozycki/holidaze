import { useState } from "react";
import { useAppContext } from "../../../context/app/useAppContext";
import { CustomButton, CustomLoginRequiredModal, CustomToastify } from "../..";
import "./BookVenueButton.scss";

const BookVenueButton = () => {
  const { state } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleBookReservation = () => {
    if (!state.userProfile) {
      setShowModal(true);
    } else {
      setShowToast(true);
    }
  };

  return (
    <>
      <CustomButton btnText='Book venue' onClick={handleBookReservation} className='book-venue-not-logged-button' />

      {showModal && <CustomLoginRequiredModal show={showModal} onHide={handleCloseModal} />}

      {showToast && <CustomToastify notifyText='Booking completed!' />}
    </>
  );
};

export default BookVenueButton;
