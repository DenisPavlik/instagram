"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Camera as CameraIcon,
  LayoutGrid,
  User2Icon,
} from "lucide-react";

const items = [
  { href: "/", key: "home", Icon: HomeIcon },
  { href: "/search", key: "search", Icon: SearchIcon },
  { href: "/create", key: "create", Icon: CameraIcon },
  { href: "/browse", key: "browse", Icon: LayoutGrid },
  { href: "/profile", key: "profile", Icon: User2Icon },
];

function activeKeyFromPath(path: string) {
  if (path === "/") return "home";
  if (path.startsWith("/search")) return "search";
  if (path.startsWith("/browse")) return "browse";
  if (path.startsWith("/profile")) return "profile";
  if (path.startsWith("/create")) return "create";
  return "create";
}

export default function MobileNav() {
  const pathname = usePathname();
  const activeKey = activeKeyFromPath(pathname);
  const activeIndex = items.findIndex((i) => i.key === activeKey);

  const notchX = `${activeIndex * 20 + 10}%`;

  return (
    <div className="block lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-4">
        <div className="relative h-20">
          {/* BAR */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-16"
            initial={false}
            animate={{ ["--notch-x" as any]: notchX }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <div
              className="
                relative h-full rounded-2xl
                bg-white/80 backdrop-blur-md
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                [mask-image:radial-gradient(circle_30px_at_var(--notch-x)_0px,transparent_99%,black_100%)]
                [-webkit-mask-image:radial-gradient(circle_28px_at_var(--notch-x)_0px,transparent_99%,black_100%)]
              "
            >
              {/* ICONS */}
              <div className="grid h-full grid-cols-5 items-center px-3">
                {items.map(({ href, key, Icon }, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <Link
                      key={key}
                      href={href}
                      className="h-full grid place-items-center"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 0 : 1,
                          y: isActive ? 6 : 0,
                        }}
                        transition={{ duration: 0.15 }}
                        className="text-black/80"
                      >
                        <Icon size={24} />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* FLOATING ACTIVE BUTTON */}
          <motion.div
            className="absolute -top-2"
            initial={false}
            animate={{
              left: notchX,
              x: "-48%",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <div
              className="size-12 rounded-full bg-gradient-to-tr from-[var(--cOrange)] to-[var(--cRed)]
              text-white grid place-items-center
              shadow-[0_12px_25px_rgba(0,0,0,0.18)]"
            >
              {(() => {
                const ActiveIcon = items[activeIndex]?.Icon ?? CameraIcon;
                return <ActiveIcon size={26} />;
              })()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
