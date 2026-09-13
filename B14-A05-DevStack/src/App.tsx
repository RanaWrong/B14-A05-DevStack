import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/StackSidebar";
import type { Technology } from "./types/technology";
import technologiesData from "./data/technologies.json";
import ProjectsSection from "./components/ProjectsSection";
function App() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTechnologies = async () => {
            try {
                setLoading(true);

                await new Promise((resolve) => setTimeout(resolve, 500));

                setTechnologies(technologiesData as Technology[]);
            } finally {
                setLoading(false);
            }
        };

        loadTechnologies();
    }, []);

    const handleAddToStack = (technology: Technology) => {
        const alreadyExists = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyExists) {
            toast.warning(`${technology.name} is already in your stack.`);
            return;
        }

        setStack((currentStack) => [
            ...currentStack,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: number) => {
        const itemToRemove = stack.find((item) => item.id === id);
        setStack((currentStack) =>
            currentStack.filter((item) => item.id !== id)
        );
        if (itemToRemove) {
            toast.info(`${itemToRemove.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        if (stack.length === 0) {
            return;
        }

        setStack([]);
        toast.info("All technologies removed from your stack.");
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />

                    <p className="mt-4 text-sm font-medium text-slate-500">
                        Loading technologies...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white text-slate-900">
                <Hero />

                <section
                    id="technologies"
                    className="border-t border-slate-100 bg-slate-50/60"
                >
                    <div className="mx-auto max-w-7xl px-6 py-20">
                        <div className="mb-10 max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                                Technology Library
                            </p>

                            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                                Explore the{" "}
                                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                    Technologies
                                </span>
                            </h2>

                            <p className="mt-4 leading-7 text-slate-500">
                                Discover the tools and technologies that can power your next project.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                            <TechnologyGrid
                                technologies={technologies}
                                stack={stack}
                                onAdd={handleAddToStack}
                            />

                            <StackSidebar
                                stack={stack}
                                onRemove={handleRemove}
                                onRemoveAll={handleRemoveAll}
                            />
                        </div>
                    </div>
                </section>

                <ProjectsSection />
            </main>
        </>
    );
}

export default App;