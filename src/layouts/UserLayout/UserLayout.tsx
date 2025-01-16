import { useRef } from "react";
import { HeaderUserLayout, CustomFooter } from "../../components";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderUserLayout ref={headerRef} />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default UserLayout;
