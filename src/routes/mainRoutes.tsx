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
  UserSearchResults,
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
    path: "search",
    element: <UserSearchResults />,
  },
  {
    path: "*",
    element: <PageNotExists />,
  },
];

export default mainRoutes;
