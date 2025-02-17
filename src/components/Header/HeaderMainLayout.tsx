import { forwardRef } from "react";
import NavMainLayout from "../Nav/NavMainLayout";
import "./Header.scss";

const HeaderMainLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return (
    <header className='header position-sticky mb-3 top-0'>
      <NavMainLayout ref={headerRef} />
    </header>
  );
});

HeaderMainLayout.displayName = "HeaderMainLayout";

export default HeaderMainLayout;
