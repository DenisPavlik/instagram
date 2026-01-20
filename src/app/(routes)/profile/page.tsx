import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, Settings } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <button className="group relative px-3 py-2 overflow-hidden">
          <div className="flex items-center">
            <ChevronLeft className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-2" />
            <ChevronLeft className="absolute left-3 opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
          </div>
        </button>

        <div className="font-bold flex items-center gap-2">
          my name is CJ
          <div className="size-5 rounded-full bg-cRed inline-flex justify-center items-center text-white">
            <CheckIcon size={16} />
          </div>
        </div>
        <button className="hover:rotate-45 duration-300">
          <Settings />
        </button>
      </div>
      <section className="mt-8 flex justify-center">
        <div className="size-48 bg-gradient-to-tr from-cOrange to-cRed rounded-full p-2">
          <div className="size-44 bg-white rounded-full p-2">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-4">
        <h1 className="text-bold text-xl">John</h1>
        <p className="text-gray-500 my-1">Business account</p>
        <p>Entrepreneur, CEO of RoboTech</p>
      </section>
      <section className="mt-4">
        <div className="flex justify-center gap-4 font-semibold">
          <Link href={'/'}>Posts</Link>
        <Link href={'/highlights'} className="text-gray-400">Highlights</Link>
        </div>
      </section>
      <section className="mt-4">
        <PostsGrid />
      </section>
    </div>
  );
}
