import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { Social } from "./Social";
import { Sample } from "./sample";

export const Footer = () => {
  return (
    <div className="bg-slate-400 p-4">
      <ul className="flex">
        <li>
          <Link href="/">
            <FontAwesomeIcon icon="house-chimney" />家
          </Link>
        </li>
        <li>
          <Link href="/about">
            <FontAwesomeIcon icon="house-chimney" />
            ABOUT
          </Link>
        </li>
      </ul>
      <Social iconSize="text-xl" />
      <small>https://github.com/ebisucom/next-react-website/tree/main</small>
      <br />
      <small>https://nextjs-react-1wia.vercel.app/</small>

      <Sample />
    </div>
  );
};
