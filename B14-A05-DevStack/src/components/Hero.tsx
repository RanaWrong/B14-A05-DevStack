const Hero = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Hero Content */}
                <div>
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#technologies"
                            className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero Illustration */}
                <div className="flex justify-center lg:justify-end">
                    <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-pink-50 via-violet-50 to-orange-50 sm:h-96 sm:w-96">
                        <div className="rounded-3xl border border-white bg-white/70 p-10 shadow-xl backdrop-blur">
                            <div className="space-y-3">
                                <div className="h-14 w-32 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-lg" />
                                <div className="mx-auto h-14 w-24 rounded-xl bg-slate-900 shadow-lg" />
                                <div className="h-14 w-32 rounded-xl bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;