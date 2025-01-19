import { createBrowserRouter } from "react-router-dom";
import { MainLayout, UserLayout, VenueManagerLayout } from "../layouts";
import mainRoutes from "./mainRoutes";
import userRoutes from "./userRoutes";
import venueManagerRoutes from "./venueManagerRoutes";

const router = createBrowserRouter([
  {
    path: "/holidaze/",
    element: <MainLayout />,
    children: mainRoutes,
  },
  {
    path: "/holidaze/user/",
    element: <UserLayout />,
    children: userRoutes,
  },
  {
    path: "/holidaze/venue-manager/",
    element: <VenueManagerLayout />,
    children: venueManagerRoutes,
  },
]);

export default router;
