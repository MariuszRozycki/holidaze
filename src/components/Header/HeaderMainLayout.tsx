import { forwardRef } from "react";
import NavMainLayout from "../Nav/NavMainLayout";

const HeaderMainLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return (
    <header className='header position-sticky top-0 z-2'>
      <NavMainLayout ref={headerRef} />
    </header>
  );
});

HeaderMainLayout.displayName = "HeaderMainLayout";

export default HeaderMainLayout;
