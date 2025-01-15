import { createBrowserRouter } from "react-router-dom";
import { MainLayout, UserLayout } from "../layouts";
import {
  UnauthenticatedHomePage,
  LoginAs,
  LoginAsUser,
  SignUp,
  SignUpAsCustomer,
  SignUpCustomerRegConfirm,
  SignUpAsManager,
  SignUpManagerRegConfirm,
  About,
  Contact,
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
    ],
  },
]);

export default router;
