import type { Metadata } from "next";
import Layout from "@/components/Layout";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hytopia - Settings",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black w-full min-h-screen">
        <Header />
        <Layout>{children}</Layout>
        <ActionBar />
      </body>
    </html>
  );
}
