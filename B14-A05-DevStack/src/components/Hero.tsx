import bannerImg from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:py-10">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

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
                    <img
                        src={bannerImg}
                        alt="DevStack Illustration"
                        className="w-full max-w-md object-contain drop-shadow-xl sm:max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;