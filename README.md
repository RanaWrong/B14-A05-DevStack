# 🧱 Dev Stack

**Dev Stack** is a React single-page app for exploring modern web technologies and assembling your own development stack. Browse a library of frontend, backend, database, styling, DevOps, and tooling options — each with a category, difficulty level, rating, and short description — then add the ones you like to a live "Your Stack" panel.

![Dev Stack preview](./ui/full.png)

---

## 🔗 Links

- **Live Site:** _https://devstack-b14-a05.netlify.app/_
- **Repository:** _https://github.com/RanaWrong/B14-A05-DevStack_

---

## ⚙️ Technologies Used

| Tool | Used for |
| --- | --- |
| **React** | Component-based UI |
| **TypeScript** | Typed props, state, and data (`src/types/technology.ts`) |
| **Tailwind CSS v4** | All styling, imported once in `src/index.css` |
| **React-Toastify** | Toast notifications for add / duplicate / remove actions |
| **Vite** | Dev server and build tool |
| **JSON** | Technology data, loaded from `src/data/technologies.json` |

---

## ✨ Features

### 1. Technology library from JSON
Twelve technologies (React, Next.js, Vue.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, Git, Docker, Vite) are loaded from a JSON file — never hardcoded in a component. Each card shows the icon, badge, name, description, category chip, difficulty, and star rating, laid out 3 columns on desktop, 2 on tablet, and 1 on mobile.

### 2. Build your stack, with no duplicates
"Add to Stack" pushes a technology into the sidebar, which shows a live count and each item's icon, name, category, and a ✕ remove button. Adding something that is already in the stack is blocked with a warning toast, and that card's button locks into a disabled **✓ Added to Stack** state. Items can be removed one at a time or cleared all at once with **Remove All**.

### 3. Polished, responsive interface
A sticky navbar with a hamburger menu on small screens, a gradient hero banner, and Projects / About / Contact / Footer sections. One shared orange → pink → violet gradient runs through the brand name, hero heading, and primary buttons. A spinner is shown while the technology data is loading, and every stack action confirms itself with a toast.

| Empty stack | Stack with items |
| --- | --- |
| ![Empty stack](./ui/YourStack-without.png) | ![Stack with items](./ui/YourStack-with.png) |

---

## 📁 Project Structure

```
src/
├── App.tsx                  # State for technologies, stack, and loading
├── main.tsx                 # Root render + ToastContainer
├── index.css                # Tailwind import and base styles
├── components/
│   ├── Navbar.tsx           # Sticky nav + mobile hamburger menu
│   ├── Hero.tsx             # Banner with gradient heading
│   ├── TechnologyGrid.tsx   # Maps technologies to cards
│   ├── TechnologyCard.tsx   # Single technology card
│   ├── StackSidebar.tsx     # "Your Stack" panel
│   ├── ProjectsSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/technologies.json   # Technology data
└── types/technology.ts      # Technology type
```

---

## 🚀 Running Locally

```bash
git clone <repository-url>
cd B14-A05-DevStack
npm install
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173>).

To build for production:

```bash
npm run build
npm run preview
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**

JSX is HTML-like syntax written inside JavaScript. It gets compiled into normal `React.createElement()` calls. It's used because describing the UI as markup is far easier to read than writing those function calls by hand, and it lets me mix in JavaScript values directly, like `{technology.name}`.

**2. What is the difference between props and state?**

Props are data passed *into* a component from its parent, and the component cannot change them — they're read-only. State is data a component owns and can change itself, and changing it re-renders the component. In this project, `stack` is state inside `App`, while `TechnologyCard` just receives `technology` and `isAdded` as props.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` gives a function component a value that survives re-renders, plus a setter that updates the value and triggers a re-render. I used it in [App.tsx](src/App.tsx) for three things — `technologies` (the loaded JSON), `stack` (the selected technologies), and `loading` (whether the spinner shows) — and in [Navbar.tsx](src/components/Navbar.tsx) for `isMenuOpen`, which controls the mobile dropdown.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code *after* a render, for side effects that aren't part of building the UI. I used it in [App.tsx](src/App.tsx) with an empty dependency array `[]` so the loading runs exactly once when the app mounts. Loading the data calls `setTechnologies` and `setLoading`, and doing that directly in the component body would trigger another render and loop forever — `useEffect` is the correct place for it, and it's also where the short artificial delay for the loading state lives.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The key tells React which element matches which item between renders. Without it React can't tell an item apart from its neighbour, so it may reuse or rebuild the wrong DOM nodes when the list changes. I used `key={technology.id}` in both [TechnologyGrid.tsx](src/components/TechnologyGrid.tsx) and [StackSidebar.tsx](src/components/StackSidebar.tsx) — important there, because items get removed from the middle of the stack.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different JSX depending on the current state. In [StackSidebar.tsx](src/components/StackSidebar.tsx) I check whether the stack is empty:

```tsx
{stack.length === 0 ? (
    <div className="mt-6 rounded-xl border border-dashed ...">
        <p className="text-sm text-slate-400">Your stack is empty.</p>
    </div>
) : (
    // the list of selected technologies + "Remove All"
)}
```

I also use it for the loading spinner in `App`, and for the card button, which renders `✓ Added to Stack` and becomes disabled when `isAdded` is true.

**7. How do you pass data from a parent to a child, and how does a child send something back?**

Data goes **down** as props: `App` passes `technologies`, `stack`, and `onAdd` into `TechnologyGrid`, which passes a single `technology` down to each `TechnologyCard`.

Data comes **back up** through callback functions. `App` owns the stack, so it defines `handleAddToStack` and passes it down as the `onAdd` prop. When the button is clicked, the child calls `onAdd(technology)` — the child doesn't change the stack itself, it just reports what happened, and the parent decides what to do. `onRemove(id)` and `onRemoveAll()` in the sidebar work the same way.

---

Built as assignment **B14-A05** 🎓
