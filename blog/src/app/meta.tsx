import React from "react";

import { siteMeta } from "@/lib/constants";
const {
  siteTitle,
  siteDesc,
  siteLocale,
  siteIcon,
  siteType,
  siteUrl,
  sitelang,
} = siteMeta;

export const Meta = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta property="og:title" content="ページタイトル" />
      <meta property="og:desctiption" content="ページの説明" />
      <link rel="canonical" href="https://サイトurl/ページのパス" />
      <meta property="og:url" content="https://サイトurl/ページのパス" />
      <meta property="og:site_name" content="サイト名" />
      <meta property="og:type" content="コンテンツの種類" />
      <meta property="og:locale" content="ロケール" />
      <meta property="og:image" content="ogp画像" />
      <meta property="og:image:width" content="ogp画像の横幅" />
      <meta property="og:image:height" content="ogp画像の高さ" />
      <meta property="twitter:card" content="sunmary_large_image" />
    </head>
  );
};
