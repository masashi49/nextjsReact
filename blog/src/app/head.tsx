import React from "react";

export const Head = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>ページタイトル|練習サイト</title>
      <meta property="og:title" content="ページタイトル｜練習サイト" />
      <meta name="description" content="ページの説明" />
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
