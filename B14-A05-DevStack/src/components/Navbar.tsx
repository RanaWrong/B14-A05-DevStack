import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

                {/* Mobile: Left Hamburger Icon */}
                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg text-slate-700 transition hover:bg-slate-100"
                        aria-label="Toggle navigation menu"
                    >
                        <span className={`h-0.5 w-5 bg-slate-800 transition duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`h-0.5 w-5 bg-slate-800 transition duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-5 bg-slate-800 transition duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>

                {/* Brand Logo (Center on mobile, Left on desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <a href="#" className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-[10px] font-bold text-white shadow-sm">
                            DS
                        </span>

                        <span className="text-lg font-bold text-slate-900">
                            Dev <span className="text-pink-500">Stack</span>
                        </span>
                    </a>
                </div>

                {/* Desktop Menu (Center on desktop) */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm font-medium text-pink-500">
                        Home
                    </a>

                    <a href="#technologies" className="text-sm text-slate-500 transition hover:text-pink-500">
                        Technologies
                    </a>

                    <a href="#projects" className="text-sm text-slate-500 transition hover:text-pink-500">
                        Projects
                    </a>

                    <a href="#about" className="text-sm text-slate-500 transition hover:text-pink-500">
                        About
                    </a>

                    <a href="#contact" className="text-sm text-slate-500 transition hover:text-pink-500">
                        Contact
                    </a>
                </div>

                {/* Right: Actions (Visible on both mobile & desktop) */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:text-pink-500 sm:px-3 sm:py-2 sm:text-sm">
                        Sign In
                    </button>

                    <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2 sm:text-sm">
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="border-t border-slate-100 bg-white px-6 py-4 shadow-lg md:hidden">
                    <div className="flex flex-col gap-3">
                        <a
                            href="#"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-semibold text-pink-500"
                        >
                            Home
                        </a>
                        <a
                            href="#technologies"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Technologies
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;