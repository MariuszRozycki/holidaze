import { useState } from "react";
import { Container } from "react-bootstrap";
import { useAppContext } from "../../context/app/useAppContext";
import { CustomRemoveBookingModal } from "../";
import { format } from "date-fns";
import { useFetchBookingsByName, useRemoveBooking } from "../../hooks";

const CustomerUpcomingBookings = () => {
  const { state } = useAppContext();
  const { isLoading, error, userProfile } = state;

  const { userBookings, isBookingsByNameLoading, bookingsByNameError } = useFetchBookingsByName(userProfile?.name || "");

  const [deletingBookings, setDeletingBookings] = useState<string[]>([]);

  const removeBooking = useRemoveBooking();
  const [showRemoveBookingModal, setShowRemoveBookingModal] = useState<boolean>(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);

  if (isBookingsByNameLoading) {
    return <Container>Bookings by name are loading...</Container>;
  }

  if (bookingsByNameError) {
    return <Container>Bookings by name error: {bookingsByNameError}</Container>;
  }

  if (!userBookings) {
    return <Container>No bookings by name</Container>;
  }

  if (isLoading) {
    return <Container>Loading profile...</Container>;
  }

  if (error) {
    return <Container>Error: {error}</Container>;
  }

  if (!userProfile) {
    return <Container>No profile found</Container>;
  }

  const handleRemoveBooking = async (bookingId: string) => {
    setDeletingBookings((prev) => [...prev, bookingId]);

    try {
      await removeBooking(bookingId);
    } catch (error) {
      console.error("Error removing booking: ", error);
    } finally {
      setDeletingBookings((prev) => prev.filter((id) => id !== bookingId));
    }
  };

  return (
    <section className='upcoming-bookings'>
      <h4 className='h4 fw-semibold mt-5 mb-3'>You have {userBookings.length} upcoming bookings: </h4>
      <ul className='upcoming-bookings'>
        {userBookings.map((booking, index) => {
          const dateFrom = new Date(booking.dateFrom);
          const dateTo = new Date(booking.dateTo);
          const formattedDateFrom = format(dateFrom, "dd MMM yyyy");
          const formattedDateTo = format(dateTo, "dd MMM yyyy");
          const venueName = booking.venue.name.toUpperCase();
          const isDeleting = deletingBookings.includes(booking.id);

          return (
            <li className='fs-5 fs-semibold' key={booking.id}>
              <p className='pb-2 mb-3 d-flex justify-content-between'>
                No: {index + 1}
                <button
                  className='rounded border-1'
                  onClick={() => {
                    setSelectedBookingId(booking.id);
                    setShowRemoveBookingModal(true);
                  }}
                  disabled={isDeleting}
                >
                  <i className='bi bi-trash3-fill'></i>
                </button>
              </p>

              <p className='border-bottom border-info pb-2 mb-2'>Reservation nr: {booking.id.slice(0, 13)}</p>
              <p className='fw-semibold border-bottom border-info pb-2 mb-2'>Venue: {venueName}</p>
              <p>From: {formattedDateFrom}</p>
              <p>To: {formattedDateTo}</p>
              <p>Guests: {booking.guests}</p>
            </li>
          );
        })}
      </ul>
      <CustomRemoveBookingModal
        show={showRemoveBookingModal}
        onHide={() => {
          setShowRemoveBookingModal(false);
          setSelectedBookingId(null);
        }}
        onConfirm={() => {
          if (selectedBookingId) {
            handleRemoveBooking(selectedBookingId);
          }
          setShowRemoveBookingModal(false);
          setSelectedBookingId(null);
        }}
      />
    </section>
  );
};

export default CustomerUpcomingBookings;
