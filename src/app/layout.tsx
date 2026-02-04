import type { Metadata } from "next"; 
import { Layout } from "@/components/layout";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://next-blog-site-ten.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://next-blog-site-ten.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.set",
      },
    ]
  }
};


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}