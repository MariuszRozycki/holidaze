import { useRef } from "react";
import { HeaderVenueManagerLayout, CustomFooter } from "../../components";
import { Outlet } from "react-router-dom";

const VenueManagerLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderVenueManagerLayout ref={headerRef} />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default VenueManagerLayout;
