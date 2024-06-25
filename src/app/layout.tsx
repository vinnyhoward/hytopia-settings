import type { Metadata } from "next";
import Layout from "@/components/Layout";
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
      <body
        className="relative  min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <Header />
        <Layout>{children}</Layout>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 100%)",
          }}
        ></div>
      </body>
    </html>
  );
}
