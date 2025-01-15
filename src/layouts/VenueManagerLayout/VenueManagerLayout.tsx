import { useRef } from "react";
import { CustomHeader, CustomFooter } from "../../components";
import { Outlet } from "react-router-dom";

const VenueManagerLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <CustomHeader ref={headerRef} />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default VenueManagerLayout;
