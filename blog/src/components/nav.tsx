"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <p>現在のページは{pathname}</p>
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="hover:bg-violet-100">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:bg-violet-100">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:bg-violet-100">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
