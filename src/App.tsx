import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/app/AppProvider";
import router from "./routes";

import "./styles/main.scss";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
