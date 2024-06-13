import type { Metadata } from "next";
import { Container } from "@/components/Container";
import eyeCatch from "../../../public/aboutCat.webp";
import { Contact } from "@/components/contact";
import { PostBody } from "@/components/post-body";
import Image from "next/image";

export const metadata: Metadata = {
  title: "アバウトページ-",
  description: "アバウトページのdescription",
};

export default function Page() {
  const props1 = { title: "ラーメン", url: "/blog/schedule" };
  return (
    <Container>
      <PostBody>
        <figure className="h-44 relative">
          <Image
            src={eyeCatch}
            alt="atoub cat"
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <h1>タイトル</h1>
        <p>文章</p>
      </PostBody>
      <Contact />
    </Container>
  );
}
