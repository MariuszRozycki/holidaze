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
  VenueManagerHomePage,
  // Logged user
  LoggedUserHomePage,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/holidaze/",
    element: <MainLayout />,
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
    element: <UserLayout />,
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
    element: <VenueManagerLayout />,
    children: [
      {
        path: "venue-manager-home-page",
        element: <VenueManagerHomePage />,
      },
      {
        path: "*",
        element: <PageNotExists />,
      },
    ],
  },
]);

export default router;
