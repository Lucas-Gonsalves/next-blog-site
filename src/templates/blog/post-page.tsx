import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { 
  Breadcrumb,
   BreadcrumbItem, 
   BreadcrumbLink, 
   BreadcrumbList, 
   BreadcrumbSeparator 
  } from "@/components/ui/breadcrumb";
import { Avatar } from "@/components/avatar";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

export function PostPage() {
  const router = useRouter();
  if (!router.isReady) return null;
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase()
  )!;
  const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR');
  const postUrl = `https://site.set/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description,
  });

  return (
    <main className="py-20 mb-16 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator/>

            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">{post?.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-col-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">
            <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
                loading="eager"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-10 pb-0 mt-8 md:mt-10">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xç">{post?.title}</h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar.trim()}
                  alt={post?.title}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{ post?.author.name }</Avatar.Title>
                  
                  <Avatar.Description>
                    Publicado em {" "}
                    <time dateTime={publishedDate}>{ publishedDate }</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prove-invert max-w-none px-4 pb-6 mt-10 md:px-6 lg:px-12">
              <Markdown content={post.body.raw}/>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
              <h2 className="hidden md:block mb-4 text-headidng-xs text-gray-100">Compartilhar</h2>
              
              <div className="flex justify-between md:flex-col gap-2 ">
                  {shareButtons.map((provider) => (
                    <Button
                      key={provider.provider}
                      onClick={() => provider.action()}
                      variant="outline"
                      className="w-fit md:w-full justify-start gap-2"
                    >
                      {provider.icon}
                      <span className="hidden md:block">
                        {provider.name}
                      </span>
                    </Button>
                 ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};