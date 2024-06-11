import { Decoration } from "@/components/Container";
import EachPost from "@/components/EachPost";
import { Contact } from "@/components/contact";
import { PostBody } from "@/components/post-body";

export default function Page() {
  const props1 = { title: "ラーメン", url: "/blog/schedule" };
  return (
    <Decoration>
      <PostBody>
        <h1>タイトル</h1>
        <p>文章</p>
      </PostBody>
      <Contact />
    </Decoration>
  );
}
