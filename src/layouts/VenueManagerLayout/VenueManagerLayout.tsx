import { useRef } from "react";
import { HeaderVenueManagerLayout, CustomFooter } from "../../components";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

const VenueManagerLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderVenueManagerLayout ref={headerRef} />
      <Outlet />
      <ToastContainer />
      <CustomFooter />
    </>
  );
};

export default VenueManagerLayout;
