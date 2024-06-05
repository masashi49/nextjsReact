import Link from "next/link";
import React from "react";

interface LogoProps {
  boxOn: boolean;
}
export const Logo = ({ boxOn = false }: LogoProps) => {
  return <Link href="/">CIBE {boxOn ? "true" : "false"}</Link>;
};
