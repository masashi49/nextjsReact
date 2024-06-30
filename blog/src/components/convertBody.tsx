import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export const ConvertBody = ({ contentHtml }: { contentHtml: string }) => {
  const contentReact = parse(contentHtml, {
    replace: (node: any) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            layout="responsive"
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width:768px) 768px, 100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
};
