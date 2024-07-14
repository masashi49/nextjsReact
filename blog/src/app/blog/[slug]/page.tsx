import React, { useMemo } from 'react';
import type { Metadata } from 'next';
import { Slugs, getAllSlugs, getPostBySlug } from '@/lib/api';
import { PostHeader } from '@/components/postHeader';
import Image from 'next/image';
import { PostBody } from '@/components/PostBody';
import { ConvertBody } from '@/components/convertBody';
import { PostCategories } from '@/components/postCategories';
import { extractText } from '@/lib/extractText';
import { prevNextPost } from '@/lib/prevNextPost';
import PageNation from '@/components/PageNation';

export async function generateMetadata(): Promise<Metadata> {
  const slug = 'schedule';
  const datas = await getPostBySlug(slug);

  if (datas == null) {
    return {
      title: 'Schedule Page',
      description: 'No data available',
    };
  }

  const description = extractText(datas.content);

  return {
    title: datas.title,
    description: description,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const datas = await getPostBySlug(params.slug);
  if (datas == null) return null;

  const slugs = await getAllSlugs(100);
  const [prevPost, nextPost] = prevNextPost(slugs, params.slug);

  const { title, subTitle, publishDate, eyecatch, content, categories } = datas;

  return (
    <div>
      <PostHeader title={title} subTitle={subTitle} publish={publishDate} />
      <PostCategories categories={categories} />
      {eyecatch && (
        <figure>
          <Image
            src={eyecatch.url}
            alt="画像"
            height={eyecatch.height}
            width={eyecatch.width}
          />
        </figure>
      )}
      <PostBody>
        <ConvertBody contentHtml={content} />
      </PostBody>
      <PageNation
        prevText={prevPost.title}
        prevUrl={prevPost.slug}
        nextText={nextPost.title}
        nextUrl={nextPost.slug}
      />
    </div>
  );
}
