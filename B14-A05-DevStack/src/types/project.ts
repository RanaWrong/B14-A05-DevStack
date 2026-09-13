export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    status: string;
    tagline: string;
    overview: string[];
    highlights: { label: string; value: string }[];
    features: { title: string; description: string }[];
    stack: { name: string; role: string }[];
};
