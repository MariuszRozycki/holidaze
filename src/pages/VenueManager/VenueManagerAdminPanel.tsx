import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HeadingH1 } from "../../components";

const VenueManagerAdminPanel = () => {
  return (
    <Container>
      <HeadingH1>Venue Manager Admin Panel</HeadingH1>
      <Link to='/holidaze/venue-manager/register-new-venue'>Register new venue</Link>
      <br />
      <Link to='/holidaze/venue-manager/my-venues'>My venues</Link>
      <br />
      <Link to='/holidaze/venue-manager/my-venues-bookings'>My venues bookings</Link>
    </Container>
  );
};

export default VenueManagerAdminPanel;
