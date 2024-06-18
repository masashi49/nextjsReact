import React from "react";
import { client } from "@/lib/api";

export default async function SchedulePage() {
  const data = await client.get({ endpoint: `blogs` });
  const items = data.contents.map(
    (contents: { id: string; title: string }) => ({
      id: contents.id,
      title: contents.title,
    })
  );

  return (
    <div>
      <h1>記事のタイトル</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
