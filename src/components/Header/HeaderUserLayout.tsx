import { forwardRef } from "react";
import NavUserLayout from "../Nav/NavUserLayout";

const HeaderUserLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return (
    <header className='header position-sticky top-0 z-3'>
      <NavUserLayout ref={headerRef} />
    </header>
  );
});

HeaderUserLayout.displayName = "HeaderUserLayout";

export default HeaderUserLayout;
