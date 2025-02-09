import { Container } from "react-bootstrap";
import { HeadingH1, LinkButton } from "../../../components";
import { useAppContext } from "../../../context/app/useAppContext";
import { useFetchManagerVenues } from "../../../hooks/";

const RenderVenueManagerAdminPanel = () => {
  const { state, dispatch } = useAppContext();
  console.log(state);

  const { isLoading, error, venues, userProfile } = state;
  const managerName = userProfile?.name;

  useFetchManagerVenues(undefined, undefined, undefined, undefined, undefined, dispatch, undefined, managerName);

  const totalBookings = venues ? venues.reduce((acc, venue) => acc + (venue.bookings ? venue.bookings.length : 0), 0) : 0;

  return (
    <Container>
      <div className='page-element-wrapper'>
        <HeadingH1>Venue Manager Admin Panel</HeadingH1>
        <div className='content-page-wrapper'>
          <LinkButton btnText='Register new venue' to='/holidaze/venue-manager/add-venue-page' />
          <br />
          <LinkButton btnText='My venues' to='/holidaze/venue-manager/my-venues-page' />

          <section className='mt-5'>
            {isLoading && <p>Loading venues...</p>}
            {error && <p>Wystąpił błąd: {error}</p>}

            {!isLoading && venues && (
              <>
                {venues.length === 0 ? (
                  <p>You don't have any venues.</p>
                ) : totalBookings === 0 ? (
                  <p>No reservations have been made yet.</p>
                ) : (
                  <>
                    <h2 className='h4 fw-semibold'>Reservations for all my venues:</h2>
                    {venues.map((venue) => {
                      if (!venue.bookings || venue.bookings.length === 0) {
                        return null;
                      }

                      return (
                        <div key={venue.id} style={{ marginBottom: "1rem" }}>
                          <h3 className='h4'>{venue.name || "Venue has no name"}</h3>
                          {venue.bookings.map((booking) => (
                            <div key={booking.id} className='border rounded-2 mb-3 p-2'>
                              <p>
                                <strong>Booking from:</strong> {booking.dateFrom}
                              </p>
                              <p>
                                <strong>Booking to:</strong> {booking.dateTo}
                              </p>
                              <p>
                                <strong>Number of guests:</strong> {booking.guests}
                              </p>
                              <p>
                                <strong>Client name:</strong> {booking.customer?.name} ({booking.customer?.email})
                              </p>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    </Container>
  );
};

export default RenderVenueManagerAdminPanel;
