import type { Metadata } from "next";
import { PostPage as Post} from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  };

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image]
    }
  };
}


export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }));
};

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