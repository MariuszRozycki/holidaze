import { forwardRef } from "react";
import NavVenueManagerLayout from "../Nav/NavVenueManagerLayout";

const HeaderVenueManagerLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return <NavVenueManagerLayout ref={headerRef} />;
});

HeaderVenueManagerLayout.displayName = "HeaderVenueManagerLayout";

export default HeaderVenueManagerLayout;
