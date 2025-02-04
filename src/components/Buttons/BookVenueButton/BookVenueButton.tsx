import { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../../../context/app/useAppContext";
import { useCreateBooking } from "../../../hooks";
import { fetchVenueDetailsById } from "../../../utils";
import { CustomButton, CustomLoginRequiredModal } from "../..";
import "./BookVenueButton.scss";

const BookVenueButton = () => {
  const { state, dispatch } = useAppContext();
  const [showModal, setShowModal] = useState<boolean>(false);

  const { createBooking } = useCreateBooking();

  const handleCloseModal = () => setShowModal(false);

  const handleBookReservation = async () => {
    if (!state.userProfile) {
      setShowModal(true);
      return;
    }

    if (!state.selectedDates.startDate) {
      toast.error('Dates "From" must be chosen!', {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!state.selectedDates.endDate) {
      toast.error('Dates "To" must be chosen!', {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if ((state.chosenTotalGuestsNumber || 0) === 0) {
      toast.error("Number of guests must be chosen!", {
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!state.selectedVenue?.id) {
      toast.error("Venue is not chosen!");
      return;
    }

    try {
      await createBooking({
        dateFrom: state.selectedDates.startDate.toISOString(),
        dateTo: state.selectedDates.endDate.toISOString(),
        guests: state.chosenTotalGuestsNumber || 0,
        venueId: state.selectedVenue.id,
      });

      toast.success("Booking completed successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (state.selectedVenue) {
        const updatedVenue = await fetchVenueDetailsById(state.selectedVenue.id);

        dispatch({
          type: "FETCH_VENUE_DETAILS_SUCCESS",
          payload: updatedVenue,
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred while making the booking. Please try again.");
    }
  };

  return (
    <>
      <CustomButton btnText='Book venue' onClick={handleBookReservation} className='book-venue-not-logged-button' />

      {showModal && <CustomLoginRequiredModal show={showModal} onHide={handleCloseModal} />}
    </>
  );
};

export default BookVenueButton;
