import { forwardRef } from "react";
import NavUserLayout from "../Nav/NavUserLayout";

const HeaderUserLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return (
    <header className='header position-sticky mb-3 top-0'>
      <NavUserLayout ref={headerRef} />
    </header>
  );
});

HeaderUserLayout.displayName = "HeaderUserLayout";

export default HeaderUserLayout;
