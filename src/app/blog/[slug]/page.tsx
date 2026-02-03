import { PostPage as Post} from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>
}


export default async function PostPage({
  params,
  
}: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  };

  return (
    <Post post={post}/>
  );
};