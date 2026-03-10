"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";

const navLinks = [
  { href: "/tools", label: "All Tools" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-bg/95 backdrop-blur-sm select-none">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-display text-lg font-extrabold text-ink transition-opacity hover:opacity-80 sm:text-xl"
        >
          <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-brand sm:h-9 sm:w-9">
            <Image
              src="/icon.png"
              alt="Simple Tools Hub Logo"
              width={28}
              height={28}
              className="object-contain"
              priority
            />
          </span>
          <span>
            Simple<span className="text-brand">Tools</span>
          </span>
        </Link>

        {/* Search bar — visible on md+ screens */}
        <div className="hidden w-full max-w-xs md:block">
          <SearchBar placeholder="Search 30+ tools..." />
        </div>

        {/* Nav + mobile search toggle */}
        <nav className="flex items-center gap-1">
          {/* Mobile search icon button */}
          <button
            onClick={() => setSearchOpen((s) => !s)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink md:hidden"
            aria-label="Toggle search"
          >
            {/* Search icon SVG */}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand/10 text-brand"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile search dropdown */}
      {searchOpen && (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <SearchBar autoFocus onClose={() => setSearchOpen(false)} placeholder="Search tools..." />
        </div>
      )}
    </header>
  );
}
