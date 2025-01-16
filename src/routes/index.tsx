import { createBrowserRouter } from "react-router-dom";
import { MainLayout, UserLayout, VenueManagerLayout } from "../layouts";
import {
  UnauthenticatedHomePage,
  LoginAs,
  LoginAsUser,
  LoginAsManager,
  SignUp,
  SignUpAsCustomer,
  SignUpCustomerRegConfirm,
  SignUpAsManager,
  SignUpManagerRegConfirm,
  About,
  Contact,
  PageNotExists,
  VenueManagerAdminPanel,

  /* Logged user */
  LoggedUserHomePage,

  /* Register new venue */
  RegisterNewVenue,
  MyVenues,
  MyVenuesBookings,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/holidaze/",
    element: <MainLayout />, // Main Layout
    children: [
      {
        path: "",
        element: <UnauthenticatedHomePage />,
      },
      {
        path: "login-as",
        element: <LoginAs />,
      },
      {
        path: "login-as-user",
        element: <LoginAsUser />,
      },
      {
        path: "login-as-manager",
        element: <LoginAsManager />,
      },
      {
        path: "sign-up-as",
        element: <SignUp />,
      },
      {
        path: "sign-up-as-customer",
        element: <SignUpAsCustomer />,
      },
      {
        path: "sign-up-customer-reg-conf",
        element: <SignUpCustomerRegConfirm />,
      },
      {
        path: "sign-up-as-manager",
        element: <SignUpAsManager />,
      },
      {
        path: "sign-up-manager-reg-conf",
        element: <SignUpManagerRegConfirm />,
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
    ],
  },
  {
    path: "/holidaze/user/",
    element: <UserLayout />, // User Layout
    children: [
      {
        path: "logged-user-home-page",
        element: <LoggedUserHomePage />,
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
    ],
  },
  {
    path: "/holidaze/venue-manager/",
    element: <VenueManagerLayout />, // Venue Manager Layout
    children: [
      {
        path: "venue-manager-home-page",
        element: <VenueManagerAdminPanel />,
      },
      {
        path: "register-new-venue",
        element: <RegisterNewVenue />,
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
    ],
  },
]);

export default router;
