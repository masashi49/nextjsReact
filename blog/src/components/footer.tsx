"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, {
  useState,
  useEffect,
  useTransition,
  useDeferredValue,
  ReactElement,
} from "react";
import { Social } from "./Social";

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

      <App />
    </div>
  );
};

const App = () => {
  const [list, setList] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const filteredList = heavyFilteringFunction(value, list);
    setFiltered(filteredList);
  };

  useEffect(() => {
    // 長いリストを生成
    const generateLongList = () => {
      const longList = Array.from(
        { length: 10000 },
        (_, index) => `Item ${index + 1}`
      );
      setList(longList);
      setFiltered(longList);
    };
    generateLongList();
  }, []);

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Filter items" />
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function heavyFilteringFunction(query, list) {
  // 同期的な重いフィルタリング処理
  const start = Date.now();
  while (Date.now() - start < 500) {
    // 2秒間のブロック
  }
  if (!query) return list;
  return list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}
