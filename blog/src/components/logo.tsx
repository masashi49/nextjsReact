"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/next.svg";

interface LogoProps {
  boxOn: boolean;
}
export const Logo = ({ boxOn = false }: LogoProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Link href="/">
      <figure>
        <Image
          src={logo}
          alt="ロゴ"
          layout="intrinsic"
          priority
          onLoad={() => setIsImageLoaded(true)}
          className={isImageLoaded ? "none" : "bg-fuchsia-500"}
        />
      </figure>
    </Link>
  );
};
