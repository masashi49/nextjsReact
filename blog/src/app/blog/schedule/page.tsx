import React from "react";
import { client, DataType, getPostBySlug } from "@/lib/api";

export default async function SchedulePage() {
  const slug = "schedule";
  const datas = await getPostBySlug(slug);

  if (datas == null) return null;

  return (
    <div>
      <h1>{datas.title}</h1>
    </div>
  );
}
