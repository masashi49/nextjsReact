import React from "react";
import { client, DataType } from "@/lib/api";

export default async function SchedulePage() {

  
  const data = await client.get({ endpoint: `blogs` }); // client.getはpromiseが解決されたものが帰るので、awaitすれば直接データ取れる。
  const items = data.contents.map((contents: DataType) => ({
    id: contents.id,
    title: contents.title,
  }));

  return (
    <div>
      <h1>記事のタイトル</h1>

      {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
    </div>
  );
}
