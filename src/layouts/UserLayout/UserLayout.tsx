import { useRef } from "react";
import { HeaderUserLayout, CustomFooter, LoggedUserComponent } from "../../components";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeaderUserLayout ref={headerRef} />
      <LoggedUserComponent />
      <Outlet />
      <ToastContainer />
      <CustomFooter />
    </>
  );
};

export default UserLayout;
