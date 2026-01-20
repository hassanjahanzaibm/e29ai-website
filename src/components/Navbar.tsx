"use client";

import Link from "next/link";
import { useState } from "react";
import BookingButton from "./BookingButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-2xl font-bold tracking-tight text-[#0B1F3A]">
            e29AI
          </span>
          <span className="hidden text-xs font-medium text-slate-400 sm:inline">
            Your AI Tech Buddy
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-[#334155] transition-colors hover:text-[#16A34A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookingButton
            variant="primary"
            className="hidden px-5 py-2.5 sm:inline-flex"
          >
            Free Consultation
          </BookingButton>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#334155] transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#E2E8F0] bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 font-medium text-[#334155] transition-colors hover:bg-slate-50 hover:text-[#16A34A]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <BookingButton variant="primary" className="w-full">
                Free Consultation
              </BookingButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
