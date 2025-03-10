import {
  VenueManagerAdminPanelPage,
  RegisterNewVenuePage,
  NewVenueRegistered,
  MyVenuesPage,
  MyVenuesBookings,
  PageNotExists,
  UpdateVenueDataPage,
  VenueByIdPage,
} from "../pages";

const venueManagerRoutes = [
  {
    path: "venue-manager-admin-panel",
    element: <VenueManagerAdminPanelPage />,
  },
  {
    path: "add-venue-page",
    element: <RegisterNewVenuePage />,
  },
  {
    path: "update-venue-by-id/:id",
    element: <UpdateVenueDataPage />,
  },
  {
    path: "venue-by-id/:id",
    element: <VenueByIdPage />,
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
