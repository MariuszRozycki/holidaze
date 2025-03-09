import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { format } from "date-fns";
import { HeadingH1, LinkButton } from "../../../components";
import { useAppContext } from "../../../context/app/useAppContext";
import { capitalizeFirstLetter } from "../../../utils";
import { useFetchManagerVenues } from "../../../hooks/";
import "./RenderVenueManagerAdminPanel.scss";

const RenderVenueManagerAdminPanel = () => {
  const { state, dispatch } = useAppContext();

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
            {error && <p>Error occurred: {error}</p>}

            {!isLoading && venues && (
              <>
                {venues.length === 0 ? (
                  <Link to='/holidaze/venue-manager/add-venue-page' className='manager-no-venues-message'>
                    You don't have any venues. Add venue.
                  </Link>
                ) : totalBookings === 0 ? (
                  <p className='fw-semibold'>No reservations have been made yet.</p>
                ) : (
                  <>
                    <h2 className='h4 fw-semibold mb-2'>Reservations for my venues</h2>
                    <p className='fs-5 mb-4'>Number of objects: {venues.length}</p>
                    {venues.map((venue) => {
                      if (!venue.bookings || venue.bookings.length === 0) {
                        return null;
                      }

                      return (
                        <div key={venue.id} className='mb-3'>
                          <h3 className='h4'>
                            Venue name: {venue.name ? capitalizeFirstLetter({ text: venue.name }) : "Venue has no name"}
                          </h3>
                          <p>Object has: {venue.bookings.length} reservation(s)</p>

                          {venue.bookings.map((booking) => {
                            const fromDate = format(new Date(booking.dateFrom), "dd MMMM yyyy");
                            const toDate = format(new Date(booking.dateTo), "dd MMMM yyyy");

                            return (
                              <div key={booking.id} className='mb-3 p-2 w-100'>
                                <p>
                                  <strong>Booking from:</strong> {fromDate}
                                </p>
                                <p>
                                  <strong>Booking to:</strong> {toDate}
                                </p>
                                <p>
                                  <strong>Number of guests:</strong> {booking.guests}
                                </p>
                                <p>
                                  <strong>Client name:</strong> {booking.customer?.name} ({booking.customer?.email})
                                </p>
                              </div>
                            );
                          })}
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
