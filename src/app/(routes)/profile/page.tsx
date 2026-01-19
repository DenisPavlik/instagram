import { ChevronLeft, Settings } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex items-center justify-between">
      <button className="group relative px-3 py-2 overflow-hidden">
        <div className="flex items-center">
          <ChevronLeft className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-2" />
          <ChevronLeft className="absolute left-3 opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </button>

      <div className="font-bold">my name is CJ</div>
      <button className="hover:rotate-45 duration-300">
        <Settings />
      </button>
    </div>
  );
}
