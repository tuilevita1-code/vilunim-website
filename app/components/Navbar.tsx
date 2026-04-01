"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CALENDLY_URL } from "../lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-midnight transition-shadow duration-200 ${
        scrolled ? "shadow-lg shadow-black/30" : "border-b border-white/10"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold text-cream tracking-wide"
            aria-label="Vilunim home"
          >
            Vilunim
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-forest text-cream text-sm font-medium hover:bg-forest/80 transition-colors duration-200"
              aria-label="Book a free demo call"
            >
              Book a Free Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-cream"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile full-screen overlay */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-16 bg-midnight z-40 flex flex-col items-center justify-center gap-8"
          >
            <a
              href="#how-it-works"
              className="text-2xl font-medium text-cream/80 hover:text-cream transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-2xl font-medium text-cream/80 hover:text-cream transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-forest text-cream text-lg font-medium hover:bg-forest/80 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Book a Free Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
