import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/app/AppProvider";
import router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/main.scss";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
