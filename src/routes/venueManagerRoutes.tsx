import {
  VenueManagerAdminPanel,
  RegisterNewVenue,
  NewVenueRegistered,
  MyVenuesPage,
  MyVenuesBookings,
  PageNotExists,
} from "../pages";

const venueManagerRoutes = [
  {
    path: "venue-manager-admin-panel",
    element: <VenueManagerAdminPanel />,
  },
  {
    path: "add-venue-page",
    element: <RegisterNewVenue />,
  },
  {
    path: "new-venue-registered",
    element: <NewVenueRegistered />,
  },
  {
    path: "my-venues-page",
    element: <MyVenuesPage />,
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
