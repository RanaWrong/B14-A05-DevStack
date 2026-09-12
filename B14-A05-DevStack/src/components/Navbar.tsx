const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-[10px] font-bold text-white">
                        DS
                    </span>

                    <span className="text-lg font-bold text-slate-900">
                        Dev <span className="text-pink-500">Stack</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm font-medium text-pink-500">
                        Home
                    </a>

                    <a href="#technologies" className="text-sm text-slate-500 hover:text-pink-500">
                        Technologies
                    </a>

                    <a href="#projects" className="text-sm text-slate-500 hover:text-pink-500">
                        Projects
                    </a>

                    <a href="#about" className="text-sm text-slate-500 hover:text-pink-500">
                        About
                    </a>

                    <a href="#contact" className="text-sm text-slate-500 hover:text-pink-500">
                        Contact
                    </a>
                </div>

                {/* Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <button className="text-sm font-medium text-slate-600 hover:text-pink-500">
                        Sign In
                    </button>

                    <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-sm">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu */}
                <button
                    type="button"
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Open menu"
                >
                    <span className="h-0.5 w-5 bg-slate-800" />
                    <span className="h-0.5 w-5 bg-slate-800" />
                    <span className="h-0.5 w-5 bg-slate-800" />
                </button>
            </nav>
        </header>
    );
};

export default Navbar;