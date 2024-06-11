import { Decoration } from "@/components/Container";
import eyeCatch from "../../../public/aboutCat.webp";
import { Contact } from "@/components/contact";
import { PostBody } from "@/components/post-body";
import Image from "next/image";

export default function Page() {
  const props1 = { title: "ラーメン", url: "/blog/schedule" };
  return (
    <Decoration>
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
    </Decoration>
  );
}
