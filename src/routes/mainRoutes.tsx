import {
  UnauthenticatedHomePage,
  LoginAs,
  LoginAsUser,
  LoginAsManager,
  SignUpPage,
  SignUpAsCustomerPage,
  SignUpCustomerRegConfirm,
  SignUpAsManagerPage,
  SignUpManagerRegConfirm,
  About,
  Contact,
  PageNotExists,
  UserSearchResults,
  VenueByIdPage,
} from "../pages";

const mainRoutes = [
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
    path: "sign-up-page",
    element: <SignUpPage />,
  },
  {
    path: "sign-up-page/sign-up-as-customer-page",
    element: <SignUpAsCustomerPage />,
  },
  {
    path: "sign-up-customer-reg-conf",
    element: <SignUpCustomerRegConfirm />,
  },
  {
    path: "sign-up-page/sign-up-as-manager-page", // zmienic sciezke
    element: <SignUpAsManagerPage />,
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
    path: "search",
    element: <UserSearchResults />,
  },
  {
    path: "venue-by-id/:id",
    element: <VenueByIdPage />,
  },
  {
    path: "*",
    element: <PageNotExists />,
  },
];

export default mainRoutes;
