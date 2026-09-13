import type { Project } from "../types/project";

type ProjectDetailsProps = {
    project: Project;
    onBack: () => void;
};

const ProjectDetails = ({ project, onBack }: ProjectDetailsProps) => {
    return (
        <main className="min-h-screen bg-white text-slate-900">

            {/* Header */}
            <section className="border-b border-slate-100 bg-slate-50/60">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <button
                        type="button"
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-pink-500"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Projects
                    </button>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 text-2xl font-bold text-pink-500">
                            {project.title.charAt(0)}
                        </div>

                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                            {project.status}
                        </span>
                    </div>

                    <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        {project.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg leading-8 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text font-semibold text-transparent">
                        {project.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="mx-auto max-w-5xl px-6 py-10">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.highlights.map((highlight) => (
                        <div
                            key={highlight.label}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                {highlight.label}
                            </p>

                            <p className="mt-2 text-sm font-bold text-slate-900">
                                {highlight.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Overview */}
            <section className="mx-auto max-w-5xl px-6 pb-4">
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                    Project Overview
                </h2>

                <div className="mt-5 space-y-4">
                    {project.overview.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="leading-7 text-slate-500">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-5xl px-6 py-12">
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                    Key Features
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                    {project.features.map((feature, index) => (
                        <article
                            key={feature.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_45px_rgb(15,23,42,0.08)]"
                        >
                            <span className="text-sm font-black text-pink-500">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3 className="mt-3 text-lg font-bold text-slate-900">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Tech stack */}
            <section className="border-t border-slate-100 bg-slate-50/60">
                <div className="mx-auto max-w-5xl px-6 py-12">
                    <h2 className="text-2xl font-black tracking-tight text-slate-950">
                        Technology Stack
                    </h2>

                    <div className="mt-6 space-y-3">
                        {project.stack.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-slate-200 bg-white p-4"
                            >
                                <h3 className="w-32 text-sm font-bold text-slate-900">
                                    {item.name}
                                </h3>

                                <p className="flex-1 text-sm text-slate-500">
                                    {item.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={onBack}
                        className="mt-10 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        ← Back to All Projects
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;
