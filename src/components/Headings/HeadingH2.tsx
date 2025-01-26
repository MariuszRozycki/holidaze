import React from "react";

interface HeadingH2Props {
  children: React.ReactNode;
  className?: string;
}

const HeadingH2 = ({ children, className }: HeadingH2Props) => {
  return <h2 className={`custom-heading custom-heading-h2 mb-3 ${className}`}>{children}</h2>;
};

export default HeadingH2;
