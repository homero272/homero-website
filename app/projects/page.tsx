import NavBar from "@/components/NavBar";

const badgeVariants = [
  "badge-primary",
  "badge-secondary",
  "badge-accent",
  "badge-neutral",
  "badge-info",
  "badge-success",
  "badge-warning",
  "badge-error",
];

const projects = [
  {
    title: "DFA/NFA Visualizer",
    subtitle: "React · JavaScript · Automata Theory",
    summary: "Built a reusable automata visualization experience with acceptance and equivalence testing.",
    skills: ["React", "JavaScript", "CSS", "HTML", "DFS", "BFS"],
    highlights: [
      "Designed reusable JSON machine formats for save/upload support.",
      "Created an approachable UI for automata construction and testing.",
      "Implemented DFS/BFS algorithms for string acceptance and equivalence validation.",
    ],
  },
  {
    title: "Online Multiplayer Poker Game",
    subtitle: "React · WebSockets · AWS",
    summary: "Delivered a real-time poker experience with live game updates and SQL-backed persistence.",
    skills: ["React", "WebSockets", "AWS", "SQL", "REST API"],
    highlights: [
      "Created a responsive multiplayer interface with real-time updates.",
      "Built a REST API for game state and player data retrieval.",
      "Led a team of 3 using Scrum ceremonies and sprint planning.",
    ],
  },
  {
    title: "Threading & Synchronization",
    subtitle: "C++ · OpenMP · Parallel Programming",
    summary: "Optimized concurrency with thread safety primitives to improve runtime by 10x.",
    skills: ["C++", "OpenMP", "std::thread", "Atomics", "Mutexes"],
    highlights: [
      "Implemented synchronization primitives for correct concurrent execution.",
      "Used dynamic and static scheduling to maximize thread efficiency.",
      "Improved performance 10x over the iterative version.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <NavBar />
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em]">Projects</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Work that shows impact</h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground">
            These projects highlight my hands-on experience with web apps, automation, and performance optimization across front-end and systems-level work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-base-300 bg-base-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-[0.3em]">{project.subtitle}</p>
                <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-3 text-sm leading-6">{project.summary}</p>
              </div>

              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.3em]">Skills used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span key={skill} className={`badge ${badgeVariants[index % badgeVariants.length]} badge-sm`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-sm leading-6">
                {project.highlights.map((highlight) => (
                  <p key={highlight} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    {highlight}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
