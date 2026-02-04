import type { Metadata } from "next"; 
import { Layout } from "@/components/layout";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar",
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