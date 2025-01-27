import {
  UnauthenticatedHomePage,
  LoginAsPage,
  LoginAsCustomerPage,
  LoginAsManagerPage,
  SignUpPage,
  SignUpAsCustomerPage,
  SignUpCustomerRegConfirmPage,
  SignUpManagerRegConfirmPage,
  SignUpAsManagerPage,
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
    path: "login-as-page",
    element: <LoginAsPage />,
  },
  {
    path: "login-as-page/login-as-customer-page",
    element: <LoginAsCustomerPage />,
  },
  {
    path: "login-as-page/login-as-manager-page",
    element: <LoginAsManagerPage />,
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
    path: "sign-up-customer-reg-conf-page",
    element: <SignUpCustomerRegConfirmPage />,
  },
  {
    path: "sign-up-page/sign-up-as-manager-page",
    element: <SignUpAsManagerPage />,
  },
  {
    path: "sign-up-manager-reg-conf",
    element: <SignUpManagerRegConfirmPage />,
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
