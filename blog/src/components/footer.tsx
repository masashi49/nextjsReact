import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">TOP</Link> {/* aタグ不要 */}
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};
