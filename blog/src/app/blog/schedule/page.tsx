import React from "react";
import { client, DataType, getPostBySlug } from "@/lib/api";
import { PostHeader } from "@/components/postHeader";
import Image from "next/image";

export default async function SchedulePage() {
  const slug = "schedule";
  const datas = await getPostBySlug(slug);

  if (datas == null) return null;

  console.log(datas);

  const { title, subTitle, publishDate, eyecatch } = datas;

  return (
    <div>
      <PostHeader title={title} subTitle={subTitle} publish={publishDate} />
      <Image
        src={eyecatch.url}
        alt="画像"
        height={eyecatch.height}
        width={eyecatch.width}
      />
    </div>
  );
}
