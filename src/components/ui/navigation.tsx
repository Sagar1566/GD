"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const navItems = [
  { href: "/", label: "Gallery" },
  { href: "/Team", label: "Team" },
  { href: "/Join Us", label: "Case Studies" },
  { href: "/contacts", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Orchids
            </Link>
          </div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Menu</MenubarTrigger>
              <MenubarContent>
                {navItems.map((item) => (
                  <MenubarItem
                    key={item.href}
                    onSelect={() => router.push(item.href)}
                    className={pathname === item.href ? "bg-gray-100" : ""}
                  >
                    {item.label}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
}