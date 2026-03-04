import { useScrollReveal } from "@/hooks/useScrollReveal";

const hackathons = [
  {
    event: "Smart India Hackathon 2025",
    year: "2025",
    project: "Eco-tourism promotion website for Jharkhand",
    result: "Participated",
    description: "Built a website to promote eco-tourism in Jharkhand, focusing on sustainable travel and local attractions.",
  },
  {
    event: "HackXelerate 2026 — VJTI, Mumbai",
    year: "2026",
    project: "Cognify — Cognitive Task Manager App",
    result: "Participated",
    description: "Presented Cognify, a mental-load-aware task management app designed to prevent burnout.",
  },
];

export default function Hackathons() {
  const ref = useScrollReveal();

  return (
    <section id="hackathons" ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="scroll-reveal text-center font-display text-3xl font-bold text-foreground md:text-4xl">Hackathons</h2>
        <p className="scroll-reveal mt-2 text-center text-muted-foreground">Competitions I've participated in</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {hackathons.map((h, i) => (
            <div
              key={h.event}
              className="scroll-reveal group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-foreground">{h.event}</h3>
                <span className="shrink-0 rounded-full border border-border px-3 py-0.5 text-xs font-medium text-muted-foreground">{h.result}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{h.project}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
