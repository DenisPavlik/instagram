import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Share moments, connect with people, and explore inspiring photos and stories from around the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
