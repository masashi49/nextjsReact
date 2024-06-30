import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const PostCategories = ({ categories }: { categories: [] }) => {
  return (
    <dl>
      <dt>
        <FontAwesomeIcon icon={faFolderOpen} />
        カテゴリー
      </dt>
      <dd>
        <ul>
          {categories.map(({ name, slug }) => {
            return (
              <li key={slug}>
                <Link href={`/blog/category/${slug}`}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </dd>
    </dl>
  );
};
