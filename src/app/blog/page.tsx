import { BlogList } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";



type BlogPageProps = {
  posts: any
};

export default function BlogPage({
  posts
}: BlogPageProps) {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <div>
      <BlogList posts={sortedPosts}/>
    </div>
  );
};

