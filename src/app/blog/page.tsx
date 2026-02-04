import type { Metadata } from "next";
import { BlogList } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://next-blog-site-ten.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://next-blog-site-ten.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blog",
      },
    ]
  }
};


export default function BlogPage() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div>
      <BlogList posts={sortedPosts}/>
    </div>
  );
};

