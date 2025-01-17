import { VenueManagerAdminPanel, RegisterNewVenue, NewVenueRegistered, MyVenues, MyVenuesBookings, PageNotExists } from "../pages";

const venueManagerRoutes = [
  {
    path: "venue-manager-home-page",
    element: <VenueManagerAdminPanel />,
  },
  {
    path: "register-new-venue",
    element: <RegisterNewVenue />,
  },
  {
    path: "new-venue-registered",
    element: <NewVenueRegistered />,
  },
  {
    path: "my-venues",
    element: <MyVenues />,
  },
  {
    path: "my-venues-bookings",
    element: <MyVenuesBookings />,
  },
  {
    path: "*",
    element: <PageNotExists />,
  },
];

export default venueManagerRoutes;
