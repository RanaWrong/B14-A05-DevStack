import type { Technology } from "../types/technology";

type StackSidebarProps = {
    stack: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
};

const StackSidebar = ({
    stack,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    return (
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:h-fit">
            <div>
                <h2 className="text-xl font-bold text-slate-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    {stack.length > 0
                        ? `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`
                        : "No technologies selected yet."}
                </p>
            </div>

            {stack.length === 0 ? (
                <div className="mt-6 rounded-xl border border-dashed border-slate-200 py-10 text-center">
                    <p className="text-sm text-slate-400">
                        Your stack is empty.
                    </p>
                </div>
            ) : (
                <>
                    <div className="mt-5 space-y-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3"
                            >
                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-8 w-8 object-contain"
                                />

                                <div className="min-w-0 flex-1">
                                    <h3 className="truncate text-sm font-semibold text-slate-900">
                                        {technology.name}
                                    </h3>

                                    <p className="text-xs text-slate-400">
                                        {technology.category}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => onRemove(technology.id)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
                                    aria-label={`Remove ${technology.name}`}
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-6 w-full rounded-xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-500 shadow-sm transition hover:border-red-300 hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
};

export default StackSidebar;