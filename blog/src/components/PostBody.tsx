import React from "react";

export const PostBody = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <article>{children}</article>;
};
