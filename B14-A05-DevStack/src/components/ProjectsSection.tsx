const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce application with product management, shopping cart, and responsive user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    status: "Frontend",
  },
  {
    title: "Task Management App",
    description:
      "A productivity-focused application for creating, organizing, and tracking daily tasks efficiently.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Full Stack",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A clean dashboard interface for monitoring application metrics, reports, and business insights.",
    tech: ["React", "TypeScript", "Charts"],
    status: "Dashboard",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Featured Projects
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            Discover practical projects and the technologies behind them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_45px_rgb(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 text-lg font-bold text-pink-500">
                  {project.title.charAt(0)}
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {project.status}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-6 text-sm font-semibold text-pink-500 transition hover:text-violet-600"
              >
                View Project →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
