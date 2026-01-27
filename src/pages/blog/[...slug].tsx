import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  console.log(router.asPath)

  return (
    <div>

      <h2>Blog</h2>
    </div>
  );
}