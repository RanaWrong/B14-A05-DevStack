const features = [
  {
    number: "01",
    title: "Explore Technologies",
    description:
      "Browse modern frontend, backend, database, styling, and development tools in one place.",
  },
  {
    number: "02",
    title: "Compare Options",
    description:
      "Review categories, difficulty levels, ratings, and descriptions before choosing a technology.",
  },
  {
    number: "03",
    title: "Build Your Stack",
    description:
      "Select the technologies you need and create a personalized development stack for your project.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
              About Dev Stack
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Make better technology{" "}
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                decisions faster.
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-500">
              Dev Stack helps developers explore the modern development
              ecosystem and organize the technologies they want to use
              for their next project.
            </p>

            <p className="mt-4 max-w-lg leading-7 text-slate-500">
              Instead of searching across multiple websites, you can
              discover technologies, understand their purpose, and
              build your own stack from a single clean interface.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgb(15,23,42,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 text-xs font-bold text-pink-500">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
