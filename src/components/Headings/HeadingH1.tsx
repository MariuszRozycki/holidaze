import React from "react";

interface HeadingH1Props {
  children: React.ReactNode;
  className?: string;
}

const HeadingH1 = ({ children, className }: HeadingH1Props) => {
  return <h1 className={`custom-heading mb-5 ${className}`}>{children}</h1>;
};

export default HeadingH1;
