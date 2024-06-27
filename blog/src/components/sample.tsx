"use client";

import React, { useState, useDeferredValue, useMemo, useEffect } from "react";

// 大きなリストを生成する関数
const generateLargeList = (size = 10000) => {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push({ id: i, name: `Item ${i}` });
  }
  return list;
};

export const Sample = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query, { timeoutMs: 300 });
  const list = useMemo(() => generateLargeList(), []);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  // デバウンスされたクエリでリストをフィルタリングおよびソート
  const filteredAndSortedList = useMemo(() => {
    console.log("Filtering and sorting list...");
    if (deferredQuery === "") return list;

    // クエリに基づいてリストをフィルタリング
    const filteredList = list.filter((item) =>
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    // フィルタリングされたリストをソート
    return filteredList.sort((a, b) => a.name.localeCompare(b.name));
  }, [deferredQuery, list]);

  return (
    <div>
      <label>
        Search:
        <input value={query} onChange={handleChange} />
      </label>
      <ul>
        {filteredAndSortedList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
