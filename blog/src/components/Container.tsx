import React, { ReactHTMLElement } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};
