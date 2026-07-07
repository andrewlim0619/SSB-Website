"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "BERANDA", href: "/" },
  { label: "PRODUK", href: "/produk" },
  { label: "TENTANG KAMI", href: "/tentang-kami" },
  { label: "JASA BOGA", href: "/jasa-boga" },
  { label: "HUBUNGI KAMI", href: "/hubungi-kami" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top accent bar */}
      <div className="h-2 bg-navy w-full" />

      <div className="container-pad">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo/SSB_company_logo.png"
              alt="SSB Logo"
              width={42}
              height={38}
              className="object-contain"
            />
            <Image
              src="/images/logo/SSB_text_logo.png"
              alt="SSB"
              width={84}
              height={34}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-wide transition-colors duration-200 hover:text-teal ${
                  pathname === link.href
                    ? "text-teal border-b-2 border-teal pb-0.5"
                    : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-navy hover:text-teal transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3">
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-teal"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold border-b border-gray-50 hover:text-teal hover:bg-gray-50 transition-colors ${
                pathname === link.href ? "text-teal" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
