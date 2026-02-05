import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Link from "next/link";
import {
  CameraIcon,
  GridIcon,
  HomeIcon,
  LayoutGrid,
  SearchIcon,
  User2Icon,
} from "lucide-react";

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
        <Theme>
          {children}
          <div className="fixed bottom-0 bg-white px-4 py-2 left-0 right-0">
            <div className="max-w-sm mx-auto flex items-center gap-6 justify-between *:size-12 *:flex *:items-center *:justify-center">
              <Link href="/">
                <HomeIcon />
              </Link>
              <Link href="/search">
                <SearchIcon />
              </Link>
              <Link
                href="/create"
                className="bg-gradient-to-tr from-cOrange to-cRed text-white size-12 flex
                items-center justify-center rounded-full relative -top-6 shadow-md shadow-gray-400"
              >
                <CameraIcon />
              </Link>
              <Link href="/browse">
                <LayoutGrid />
              </Link>
              <Link href="/profile">
                <User2Icon />
              </Link>
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
