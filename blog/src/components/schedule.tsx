import React from "react";

export const Schedule = () => {
  return <h1>記事のタイトル</h1>;
};

export async function getStaticProps() {
  console.log("処理1");
  return {
    props: {},
  };
}
