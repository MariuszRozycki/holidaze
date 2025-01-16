import { useRef } from "react";
import { HeaderMainLayout, CustomFooter } from "../../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderMainLayout ref={headerRef} />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default MainLayout;
