import { useEffect, useState } from "react";
import type { Technology } from "./types/technology";
import technologiesData from "./data/technologies.json";

function App() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTechnologies = async () => {
            setLoading(true);

            await new Promise((resolve) => setTimeout(resolve, 500));

            setTechnologies(technologiesData);
            setLoading(false);
        };

        loadTechnologies();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <section className="mx-auto max-w-7xl px-6 py-20">
                <h1 className="text-5xl font-black">
                    Build Your Ideal{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-5 max-w-2xl text-slate-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits
                    your next project.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((technology) => (
                        <article
                            key={technology.id}
                            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-10 w-10"
                            />

                            <span className="mt-4 inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                                {technology.badge}
                            </span>

                            <h2 className="mt-4 text-xl font-bold">
                                {technology.name}
                            </h2>

                            <p className="mt-2 min-h-16 text-sm leading-6 text-slate-500">
                                {technology.description}
                            </p>

                            <div className="mt-5 flex items-center justify-between text-xs">
                                <span className="rounded bg-slate-100 px-2 py-1">
                                    {technology.category}
                                </span>

                                <span>{technology.difficulty}</span>

                                <span>⭐ {technology.rating}</span>
                            </div>

                            <button
                                type="button"
                                className="mt-5 w-full rounded-lg bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                            >
                                Add to Stack
                            </button>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;