import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-slate-400">
      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon icon="house-chimney" />家
          </Link>
          {/* aタグ不要 */}
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};
