import React, { ReactHTMLElement } from "react";

interface DecorationProps {
  children: React.ReactNode;
}

export const Decoration = ({ children }: DecorationProps) => {
  return <div>{children}</div>;
};
