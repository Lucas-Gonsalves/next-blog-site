import { BlogList, type BlogListProps } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps } from "next";


type BlogPageProps = {
  posts: any
};

export default function BlogPage({
  posts
}: BlogPageProps) {

  return (
    <div>
      <BlogList posts={posts}/>
    </div>
  );
};

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return {
    props: {
      posts: sortedPosts
    },
  }
}) satisfies GetStaticProps<BlogListProps>