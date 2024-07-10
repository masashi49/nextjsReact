import React from 'react';
import { Slugs } from './api';

export const prevNextPost = (allSlugs: Slugs[], currentSlug: string) => {
  const numberOfPost = allSlugs.length;

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost =
    index + 1 === numberOfPost ? { title: '', slug: '' } : allSlugs[index + 1]; // 数字が多いほうが古い
  const prevNextPostPost =
    index === 0 ? { title: '', slug: '' } : allSlugs[index - 1];

  return [prevPost, prevNextPostPost];
};
