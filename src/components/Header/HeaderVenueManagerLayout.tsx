import { forwardRef } from "react";
import NavVenueManagerLayout from "../Nav/NavVenueManagerLayout";

const HeaderVenueManagerLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return (
    <header className='header position-sticky mb-3 top-0'>
      <NavVenueManagerLayout ref={headerRef} />
    </header>
  );
});

HeaderVenueManagerLayout.displayName = "HeaderVenueManagerLayout";

export default HeaderVenueManagerLayout;
