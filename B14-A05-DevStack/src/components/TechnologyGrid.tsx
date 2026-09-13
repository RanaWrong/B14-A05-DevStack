import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

type TechnologyGridProps = {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (technology: Technology) => void;
};

const TechnologyGrid = ({
    technologies,
    stack,
    onAdd,
}: TechnologyGridProps) => {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
                <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAdd={onAdd}
                    isAdded={stack.some((item) => item.id === technology.id)}
                />
            ))}
        </div>
    );
};

export default TechnologyGrid;