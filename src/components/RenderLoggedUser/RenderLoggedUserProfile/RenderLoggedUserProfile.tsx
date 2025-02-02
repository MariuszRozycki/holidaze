import { Container, Card } from "react-bootstrap";
import { HeadingH1 } from "../../Headings";
import { useAppContext } from "../../../context/app/useAppContext";
import { useFetchBookingsByName } from "../../../hooks";
import { CustomUpdateProfileModal } from "../../";
import "./RenderLoggedUserProfile.scss";

const RenderLoggedUserProfile = () => {
  const { state } = useAppContext();

  const { isLoading, error, userProfile } = state;
  const { userBookings } = useFetchBookingsByName(userProfile?.name || "");

  {
    userBookings?.map((el) => {
      console.log(el.id);
    });
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

  return (
    <Container>
      <HeadingH1>Render logged User Profile</HeadingH1>
      <Card>
        <Card.Img className='user-banner' src={userProfile.banner.url} />
        <Card.Img className='user-avatar' src={userProfile.avatar.url} />
        <Card.Body>
          <h2 className='h4 fw-semibold'>{userProfile.name}</h2>
          <Card.Text className='fs-4 mb-1'>{userProfile.email}</Card.Text>
          {/* <Card.Text className='fs-4'>{userProfile.bio || "No bio available"}</Card.Text> */}
          <ul>
            <li className='h4 fw-semibold'>Upcoming bookings:</li>
            {userBookings?.map((booking) => (
              <li key={booking.id}>
                Booking from {booking.dateFrom} to {booking.dateTo}, guests: {booking.guests}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <CustomUpdateProfileModal />
    </Container>
  );
};

export default RenderLoggedUserProfile;
