import React from "react";

interface EachPostProps {
  title: string;
  url: string;
}

const EachPost = ({ title, url }: EachPostProps) => {
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
  );
};

export default EachPost;
