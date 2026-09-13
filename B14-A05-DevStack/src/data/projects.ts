import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A modern e-commerce application with product management, shopping cart, and responsive user experience.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        status: "Frontend",
        tagline:
            "A complete storefront experience, from browsing products to placing an order.",
        overview: [
            "The E-Commerce Platform is a front-end storefront built around a product catalogue, a persistent shopping cart, and a checkout flow. Products are loaded from a structured data source and rendered as a responsive grid that adapts from three columns on desktop down to a single column on mobile.",
            "Shoppers can filter by category, search by name, and sort by price or rating. Adding an item to the cart updates a live summary in the header, and the cart itself handles quantity changes, line-item removal, and an order total that recalculates as the cart changes.",
            "Every piece of state — the cart, the active filters, the checkout step — lives in typed React state, so the interface stays predictable as the app grows.",
        ],
        highlights: [
            { label: "Type", value: "Frontend Application" },
            { label: "Timeline", value: "4 Weeks" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Status", value: "Completed" },
        ],
        features: [
            {
                title: "Product Catalogue",
                description:
                    "A searchable, filterable product grid with category chips, price sorting, and cards showing image, price, rating, and stock status.",
            },
            {
                title: "Shopping Cart",
                description:
                    "Add, update, and remove items with a live item count and running total. Adding the same product again raises its quantity instead of creating a second line.",
            },
            {
                title: "Checkout Flow",
                description:
                    "A multi-step checkout covering shipping details, payment method, and a final order summary before confirmation.",
            },
            {
                title: "Responsive Layout",
                description:
                    "Built mobile-first with Tailwind. The catalogue, cart drawer, and checkout all reflow cleanly across mobile, tablet, and desktop.",
            },
            {
                title: "Form Validation",
                description:
                    "Shipping and payment inputs are validated before an order can be placed, with inline field errors and clear success feedback.",
            },
            {
                title: "Toast Notifications",
                description:
                    "Cart actions, validation problems, and successful orders all confirm themselves through non-blocking toast messages.",
            },
        ],
        stack: [
            { name: "React", role: "Component architecture and state management" },
            { name: "TypeScript", role: "Typed product, cart, and order models" },
            { name: "Tailwind CSS", role: "Responsive, utility-first styling" },
            { name: "Vite", role: "Development server and production build" },
        ],
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A productivity-focused application for creating, organizing, and tracking daily tasks efficiently.",
        tech: ["React", "Node.js", "MongoDB"],
        status: "Full Stack",
        tagline: "Plan the day, track the work, and keep every task in one place.",
        overview: [
            "The Task Management App is a full-stack productivity tool. A React front end talks to an Express API backed by MongoDB, so tasks persist across sessions and devices rather than living only in browser state.",
            "Tasks can be grouped into projects, tagged by priority, and moved between To Do, In Progress, and Done. Each task carries a due date, and overdue items are surfaced at the top of the list.",
        ],
        highlights: [
            { label: "Type", value: "Full Stack Application" },
            { label: "Timeline", value: "6 Weeks" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Status", value: "Completed" },
        ],
        features: [
            {
                title: "Task Boards",
                description:
                    "Group tasks into projects and move them between To Do, In Progress, and Done columns.",
            },
            {
                title: "Priorities & Due Dates",
                description:
                    "Tag tasks by priority and deadline, with overdue items highlighted automatically.",
            },
            {
                title: "Persistent Storage",
                description:
                    "A REST API over MongoDB keeps every task saved between sessions and devices.",
            },
            {
                title: "Search & Filter",
                description:
                    "Find tasks quickly by keyword, project, priority, or completion status.",
            },
        ],
        stack: [
            { name: "React", role: "Interface and client-side state" },
            { name: "Node.js", role: "Express REST API" },
            { name: "MongoDB", role: "Task and project persistence" },
        ],
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        description:
            "A clean dashboard interface for monitoring application metrics, reports, and business insights.",
        tech: ["React", "TypeScript", "Charts"],
        status: "Dashboard",
        tagline: "Turn raw application metrics into charts people actually read.",
        overview: [
            "The Analytics Dashboard presents application and business metrics as a single scannable view. Summary tiles carry the headline numbers, and charts underneath break those numbers down over time and by segment.",
            "The date range and segment filters drive every widget at once, so the whole board stays consistent as the view changes.",
        ],
        highlights: [
            { label: "Type", value: "Dashboard Interface" },
            { label: "Timeline", value: "3 Weeks" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Status", value: "Completed" },
        ],
        features: [
            {
                title: "Metric Tiles",
                description:
                    "Headline figures with period-over-period change, so movement is visible at a glance.",
            },
            {
                title: "Interactive Charts",
                description:
                    "Line, bar, and donut charts with tooltips for reading exact values at any point.",
            },
            {
                title: "Shared Filters",
                description:
                    "A single date range and segment selector drive every widget on the board at once.",
            },
            {
                title: "Exportable Reports",
                description:
                    "Any chart or table view can be exported for sharing outside the dashboard.",
            },
        ],
        stack: [
            { name: "React", role: "Dashboard layout and widget composition" },
            { name: "TypeScript", role: "Typed metric and series data" },
            { name: "Charts", role: "Data visualisation components" },
        ],
    },
];
