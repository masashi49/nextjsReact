import React from "react";
import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="bg-slate-200 p-4">
      <Logo boxOn />
      <Nav />
    </header>
  );
};
