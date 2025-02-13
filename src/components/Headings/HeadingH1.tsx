import React from "react";
import "./Heading.scss";

interface HeadingH1Props {
  children: React.ReactNode;
  className?: string;
}

const HeadingH1 = ({ children, className }: HeadingH1Props) => {
  return <h1 className={`h3 custom-heading custom-heading-h1 mb-5 ${className}`}>{children}</h1>;
};

export default HeadingH1;
