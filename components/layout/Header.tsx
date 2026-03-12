"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SearchBar from "@/components/ui/SearchBar";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { href: "/tools", label: "All Tools" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-close menus when resizing to desktop or changing routes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    setMobileMenuOpen(false);
    setSearchOpen(false);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-bg/95 backdrop-blur-md select-none">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">

        {/* Left: Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-display text-lg font-extrabold text-ink transition-opacity hover:opacity-80 sm:text-xl"
        >
          <div className="relative h-9 w-9 rounded-lg border border-brand/20 bg-white p-1 shadow-sm sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="xs:block">
            Simple<span className="text-brand">Tools</span>
          </span>
        </Link>

        {/* Center: Search (Hidden on Mobile, visible on md+) */}
        <div className="hidden w-full max-w-xs md:block">
          <SearchBar placeholder="Search tools..." />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMobileMenuOpen(false);
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${searchOpen ? "bg-brand/10 text-brand" : "text-ink-muted hover:bg-surface-muted"
              }`}
            aria-label="Toggle search"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${isActive
                      ? "bg-brand/10 text-brand"
                      : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setSearchOpen(false);
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${mobileMenuOpen ? "bg-brand/10 text-brand" : "text-ink-muted hover:bg-surface-muted"
              }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="border-t border-border bg-surface-bg px-4 py-3 md:hidden">
          <SearchBar autoFocus onClose={() => setSearchOpen(false)} placeholder="Search tools..." />
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface-bg p-2 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${isActive
                    ? "bg-brand/10 text-brand"
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}