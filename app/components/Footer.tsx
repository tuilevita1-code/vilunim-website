export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-serif text-xl font-semibold text-cream tracking-wide">
              Vilunim
            </span>
            <a
              href="mailto:tui@vilunim.com"
              className="text-sm text-cream/50 hover:text-cream/80 transition-colors duration-200"
            >
              tui@vilunim.com
            </a>
            <p className="text-xs text-cream/30">vilunim.com</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-cream/50 hover:text-cream/80 transition-colors duration-200 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-cream/50 hover:text-cream/80 transition-colors duration-200 cursor-pointer"
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-cream/30">
            &copy; {currentYear} Vilunim. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">Built in New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
