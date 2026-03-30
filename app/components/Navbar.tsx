"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight border-b border-white/10">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-xl font-semibold text-cream tracking-wide"
            aria-label="Vilunim home"
          >
            Vilunim
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200 cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200 cursor-pointer"
            >
              FAQ
            </a>
            <a
              href="https://calendly.com/tuilevita1/30min"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-forest text-cream text-sm font-medium hover:bg-forest/80 transition-colors duration-200 cursor-pointer"
              aria-label="Book a free demo call"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 text-cream cursor-pointer"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/10 py-4 flex flex-col gap-4"
          >
            <a
              href="#how-it-works"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://calendly.com/tuilevita1/30min"
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-forest text-cream text-sm font-medium hover:bg-forest/80 transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
