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
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Your Stack
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {stack.length} {stack.length === 1 ? "item" : "items"} selected
                    </p>
                </div>

                {stack.length > 0 && (
                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="text-xs font-semibold text-red-500 hover:text-red-600"
                    >
                        Remove All
                    </button>
                )}
            </div>

            {stack.length === 0 ? (
                <div className="mt-6 rounded-xl bg-slate-50 p-6 text-center">
                    <p className="text-sm font-medium text-slate-600">
                        Your stack is empty
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Add technologies to build your stack.
                    </p>
                </div>
            ) : (
                <div className="mt-5 space-y-3">
                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                        >
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-9 w-9 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-sm font-semibold text-slate-800">
                                    {technology.name}
                                </h3>

                                <p className="text-xs text-slate-400">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => onRemove(technology.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </aside>
    );
};

export default StackSidebar;