import type { Technology } from "../types/technology";

type TechnologyCardProps = {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isAdded: boolean;
};

const TechnologyCard = ({
    technology,
    onAdd,
    isAdded,
}: TechnologyCardProps) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_20px_45px_rgb(15,23,42,0.08)]">

            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 transition duration-300 group-hover:bg-pink-50">
                    <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="h-9 w-9 object-contain"
                    />
                </div>

                <span className="rounded-full bg-gradient-to-r from-orange-50 to-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                    {technology.badge}
                </span>
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                    {technology.name}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                    {technology.description}
                </p>
            </div>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs">
                <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                    {technology.category}
                </span>

                <span className="rounded-md bg-slate-50 px-2.5 py-1 text-slate-500">
                    {technology.difficulty}
                </span>

                <span className="ml-auto font-semibold text-slate-700">
                    <span className="text-amber-400">★</span>{" "}
                    {technology.rating}
                </span>
            </div>

            {/* Button */}
            <button
                type="button"
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`mt-4 w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isAdded
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-slate-950 text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </article>
    );
};

export default TechnologyCard;