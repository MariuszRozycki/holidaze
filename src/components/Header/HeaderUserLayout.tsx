import { forwardRef } from "react";
import NavUserLayout from "../Nav/NavUserLayout";

const HeaderUserLayout = forwardRef<HTMLDivElement>((_, headerRef) => {
  return <NavUserLayout ref={headerRef} />;
});

HeaderUserLayout.displayName = "HeaderUserLayout";

export default HeaderUserLayout;
