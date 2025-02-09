import { LoggedUserHomePage, VenueByIdPage, About, Contact, PageNotExists, LoggedUserProfilePage } from "../pages";

const userRoutes = [
  {
    path: "logged-user-home-page",
    element: <LoggedUserHomePage />,
  },
  {
    path: "venue-by-id/:id",
    element: <VenueByIdPage />,
  },
  {
    path: "logged-user-by-name/:name",
    element: <LoggedUserProfilePage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <PageNotExists />,
  },
];

export default userRoutes;
