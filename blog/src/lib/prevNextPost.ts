import { Slugs } from './api';

export const prevNextPost = (
  allSlugs: Slugs[] | undefined,
  currentSlug: string
) => {
  if (!allSlugs)
    return [
      { title: '', slug: '' },
      { title: '', slug: '' },
    ];
  const numberOfPost = allSlugs.length;

  const slugIndex = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  const prevPost =
    slugIndex + 1 === numberOfPost
      ? { title: '', slug: '' }
      : allSlugs[slugIndex + 1]; // 数字が多いほうが古い
  const nextPost =
    slugIndex === 0 ? { title: '', slug: '' } : allSlugs[slugIndex - 1];

  return [prevPost, nextPost];
};
