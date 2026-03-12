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
<<<<<<< HEAD
    <header className="sticky top-0 z-50 border-b border-border bg-surface-bg/95 backdrop-blur-md select-none">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        
        {/* Left: Logo - Stays visible but gets smaller on tiny screens */}
=======
<<<<<<< HEAD
    <header className="sticky top-0 z-50 border-b border-border bg-surface-bg/95 backdrop-blur-sm select-none">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">

        {/* Logo */}
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-display text-lg font-extrabold text-ink transition-opacity hover:opacity-80 sm:text-xl"
        >
<<<<<<< HEAD
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-brand sm:h-9 sm:w-9">
            <Image
              src="/icon.png"
              alt="Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          {/* Use 'hidden sm:block' if 'xs' isn't defined in your tailwind.config */}
          <span className="xs:block">
            Simple<span className="text-brand">Tools</span>
          </span>
        </Link>
=======
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
=======
    <header className="sticky top-0 z-50 border-b border-border bg-surface-bg/90 backdrop-blur-sm select-none">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

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
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${
              searchOpen ? "bg-brand/10 text-brand" : "text-ink-muted hover:bg-surface-muted"
            }`}
          >
<<<<<<< HEAD
            {searchOpen ? <X size={20} /> : <Search size={20} />}
=======
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          </button>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
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

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setSearchOpen(false);
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${
              mobileMenuOpen ? "bg-brand/10 text-brand" : "text-ink-muted hover:bg-surface-muted"
            }`}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Dropdown - Slides down */}
      {searchOpen && (
        <div className="border-t border-border bg-surface-bg px-4 py-3 md:hidden">
          <SearchBar autoFocus onClose={() => setSearchOpen(false)} placeholder="Search tools..." />
        </div>
      )}

      {/* Mobile Menu Dropdown - Links stacking vertically */}
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface-bg p-2 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                  isActive
<<<<<<< HEAD
                    ? "bg-brand/10 text-brand"
                    : "text-ink-muted hover:bg-surface-muted"
=======
<<<<<<< HEAD
                    ? "bg-brand/10 text-brand"
=======
                    ? "bg-brand-orange/10 text-brand-orange"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                    : "text-ink-muted hover:bg-surface-muted hover:text-ink"
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
<<<<<<< HEAD
=======
      </div>

      {/* Mobile search dropdown */}
      {searchOpen && (
        <div className="border-t border-border px-4 py-3 md:hidden">
<<<<<<< HEAD
          <SearchBar autoFocus onClose={() => setSearchOpen(false)} placeholder="Search tools..." />
=======
          <SearchBar autoFocus onClose={() => setSearchOpen(false)} placeholder="Search 30+ tools…" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        </div>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      )}
    </header>
  );
}