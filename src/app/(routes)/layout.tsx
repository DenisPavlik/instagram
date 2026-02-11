import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import MobileNav from "@/components/MobileNav";
import logo from "@/app/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Camera as CameraIcon,
  LayoutGrid,
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
      <body className={`${inter.className}`}>
        <Theme>
          <div className="flex">
            <div className="hidden lg:block bg-gray-100 p-4 w-48 border-r border-gray-500/20">
              <div className="top-0 sticky">
                <Image
                  src={logo}
                  alt="Instagram Logo"
                  width={1000}
                  height={1000}
                  className="w-40 mx-auto"
                />
                <div className="grid grid-cols-1 gap-5 px-2">
                  <Link href="/home" className="flex items-center gap-4 text-xl"><HomeIcon/> Home</Link>
                  <Link href="/search" className="flex items-center gap-4 text-xl"><SearchIcon/> Search</Link>
                  <Link href="/create" className="flex items-center gap-4 text-xl"><CameraIcon/> Create</Link>
                  <Link href="/browse" className="flex items-center gap-4 text-xl"><LayoutGrid/> Browse</Link>
                  <Link href="/profile" className="flex items-center gap-4 text-xl"><User2Icon/> Profile</Link>
                </div>
              </div>
            </div>
            <div className="p-4 mx-auto">
              <div>{children}</div>
            </div>
          </div>
          <MobileNav />
        </Theme>
      </body>
    </html>
  );
}
