import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  status: "In Development" | "Completed";
}

const projects: Project[] = [
  {
    name: "Cognify",
    tagline: "A brain-first task manager",
    problem: "Most task managers ignore how you feel. When you're mentally drained, a long to-do list only makes things worse.",
    solution: "Cognify lets users input their current stress and mental load level, then intelligently prioritizes and spaces out tasks to prevent burnout.",
    features: [
      "🧠 Stress level input (1–10 scale)",
      "📋 Auto-prioritization based on stress + urgency",
      "📊 Task load dashboard",
      "🛡️ Burnout prevention through smart task spacing",
      "✅ Clean, distraction-free task interface",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    status: "In Development",
  },
  {
    name: "FixFast",
    tagline: "Instant home repair services at your fingertips",
    problem: "Finding reliable home repair professionals is stressful — no upfront pricing, no visibility on arrival time, and poor communication.",
    solution: "FixFast connects users with verified technicians (plumbers, electricians, etc.) with upfront price estimates, real-time tracking, and seamless communication.",
    features: [
      "💰 Price estimation before visit",
      "📍 Live tracking of technician",
      "💬 Chat with technician or call directly",
      "📸 Attach an image of the problem",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"],
    status: "In Development",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="scroll-reveal group relative overflow-hidden rounded-lg border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-primary hover:shadow-card-hover md:p-10"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-2xl font-bold text-foreground">{project.name}</h3>
        <span className="animate-pulse-badge rounded-full border border-warning/40 bg-warning/10 px-3 py-0.5 text-xs font-medium text-warning">
          {project.status}
        </span>
      </div>
      <p className="mt-1 italic text-muted-foreground">{project.tagline}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Problem</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Key Features</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.features.map((f) => (
            <span key={f} className="rounded-md bg-accent px-3 py-1 text-xs text-accent-foreground">{f}</span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tech Stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="rounded-md bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button disabled className="cursor-not-allowed rounded-md bg-muted px-5 py-2 text-sm font-medium text-muted-foreground">
          View on GitHub
        </button>
        <button disabled className="cursor-not-allowed rounded-md bg-muted px-5 py-2 text-sm font-medium text-muted-foreground">
          Live Demo
        </button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Coming Soon</p>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="scroll-reveal text-center font-display text-3xl font-bold text-foreground md:text-4xl">Projects</h2>
        <p className="scroll-reveal mt-2 text-center text-muted-foreground">Things I've built</p>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
