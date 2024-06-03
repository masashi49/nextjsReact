import React, { ReactHTMLElement } from "react";

interface DecorationProps {
  children: React.ReactNode;
}

export const Decoration = ({ children }: DecorationProps) => {
  return <div className="bg-gray-200 p-20">{children}</div>;
};
