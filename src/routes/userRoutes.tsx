import { LoggedUserHomePage, About, Contact, PageNotExists } from "../pages";

const userRoutes = [
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
];

export default userRoutes;
