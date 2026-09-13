const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-xs font-bold text-white shadow-sm">
                DS
              </span>

              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex items-center gap-5 text-xs font-semibold text-slate-700">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              PRODUCT
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="transition hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              COMPANY
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="transition hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="transition hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              LEGAL
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="transition hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="transition hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition hover:text-slate-600">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
