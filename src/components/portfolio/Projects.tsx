import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "🧠 Stress level input (1–10 scale)",
  "📋 Auto-prioritization based on stress + urgency",
  "📊 Task load dashboard",
  "🛡️ Burnout prevention through smart task spacing",
  "✅ Clean, distraction-free task interface",
];

const techStack = ["HTML", "CSS", "JavaScript", "Python", "Flask", "MySQL"];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="scroll-reveal text-center font-display text-3xl font-bold text-foreground md:text-4xl">Projects</h2>
        <p className="scroll-reveal mt-2 text-center text-muted-foreground">Things I've built</p>

        <div className="scroll-reveal group relative mt-12 overflow-hidden rounded-lg border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-primary hover:shadow-card-hover md:p-10">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
          
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-bold text-foreground">Cognify</h3>
            <span className="animate-pulse-badge rounded-full border border-warning/40 bg-warning/10 px-3 py-0.5 text-xs font-medium text-warning">
              In Development
            </span>
          </div>
          <p className="mt-1 italic text-muted-foreground">A brain-first task manager</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Problem</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Most task managers ignore how you feel. When you're mentally drained, a long to-do list only makes things worse.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Solution</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Cognify lets users input their current stress and mental load level, then intelligently prioritizes and spaces out tasks to prevent burnout.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Key Features</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {features.map((f) => (
                <span key={f} className="rounded-md bg-accent px-3 py-1 text-xs text-accent-foreground">{f}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tech Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((t) => (
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
      </div>
    </section>
  );
}
