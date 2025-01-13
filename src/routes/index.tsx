import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { UnauthenticatedHomePage, LoginAs, SignUp, About, Contact } from "../pages";

const router = createBrowserRouter([
  {
    path: "/holidaze/",
    element: <MainLayout />,
    children: [
      {
        path: "/holidaze/",
        element: <UnauthenticatedHomePage />,
      },
      {
        path: "login-as",
        element: <LoginAs />,
      },
      {
        path: "sign-up-as",
        element: <SignUp />,
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
]);

export default router;
