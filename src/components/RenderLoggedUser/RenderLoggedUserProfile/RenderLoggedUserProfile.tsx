import { format } from "date-fns";
import { Container, Card } from "react-bootstrap";
import { HeadingH1 } from "../../Headings";
import { useAppContext } from "../../../context/app/useAppContext";
import { useFetchBookingsByName, useRemoveBooking } from "../../../hooks";
import { CustomUpdateProfileModal } from "../../";
import "./RenderLoggedUserProfile.scss";

const RenderLoggedUserProfile = () => {
  const { state } = useAppContext();
  console.log(state);

  const { isLoading, error, userProfile } = state;
  const { userBookings, isBookingsByNameLoading, bookingsByNameError } = useFetchBookingsByName(userProfile?.name || "");
  const removeBooking = useRemoveBooking();

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

  // userBookings.forEach((booking) => console.log(booking));

  const handleRemoveBooking = (bookingId: string) => {
    console.log("Usuwany booking o id:", bookingId);
    removeBooking(bookingId);
  };

  return (
    <Container>
      <HeadingH1>Render logged User Profile</HeadingH1>
      <Card>
        <Card.Img className='user-banner' src={userProfile.banner.url} />
        <Card.Img className='user-avatar' src={userProfile.avatar.url} />
        <Card.Body>
          <h2 className='h4 fw-semibold'>{userProfile.name}</h2>
          <Card.Text className='fs-4 mb-3'>{userProfile.email}</Card.Text>
          <CustomUpdateProfileModal />
          {/* <Card.Text className='fs-4'>{userProfile.bio || "No bio available"}</Card.Text> */}
          <h4 className='h4 fw-semibold mt-5 mb-3'>Upcoming bookings:</h4>
          <ul className='upcoming-bookings'>
            {userBookings?.map((booking) => {
              const dateFrom = new Date(booking.dateFrom);
              const dateTo = new Date(booking.dateTo);
              const formattedDateFrom = format(dateFrom, "dd MMM yyyy");
              const formattedDateTo = format(dateTo, "dd MMM yyyy");
              const venueName = booking.venue.name.toUpperCase();

              return (
                <li className='fs-5' key={booking.id} onClick={handleRemoveBooking}>
                  <span className='fw-semibold'>Venue: {venueName}</span>
                  <span>From: {formattedDateFrom}</span>
                  <span>To: {formattedDateTo}</span>
                  <span>Guests: {booking.guests}</span>
                </li>
              );
            })}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RenderLoggedUserProfile;
