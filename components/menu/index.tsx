"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MenuNav = () => {
  const pathname = usePathname();

  return (
    <nav className="px-8 pt-6 flex space-x-8 border-b border-gray-300">
      <Link href="/events" legacyBehavior>
        <a
          className={clsx(
            "pb-2 px-6 text-gray-900 hover:text-blue-500 transition-colors",
            {
              "border-b-2 border-blue-600": pathname === "/events",
            }
          )}
        >
          Events
        </a>
      </Link>

      <Link href="/templates" legacyBehavior>
        <a
          className={clsx(
            "pb-2 px-6 text-gray-900 hover:text-blue-500 transition-colors",
            {
              "border-b-2 border-blue-600": pathname === "/templates",
            }
          )}
        >
          Templates
        </a>
      </Link>
    </nav>
  );
};

export default MenuNav;
