import React from "react";

interface HeadingH3Props {
  children: React.ReactNode;
  className?: string;
}

const HeadingH3 = ({ children, className }: HeadingH3Props) => {
  return <h3 className={`custom-heading custom-heading-h3 mb-3 ${className}`}>{children}</h3>;
};

export default HeadingH3;
