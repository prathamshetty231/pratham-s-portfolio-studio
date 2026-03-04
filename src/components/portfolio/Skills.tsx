import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { title: "Languages", skills: ["Python", "C", "JavaScript", "SQL"] },
  { title: "Web Development", skills: ["HTML", "CSS", "React (Basics)", "Flask"] },
  { title: "Databases", skills: ["MySQL"] },
  { title: "Tools & Version Control", skills: ["Git", "GitHub"] },
  { title: "Core CS Concepts", skills: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks"] },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content text-center">
        <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">Tech Stack</h2>
        <p className="scroll-reveal mt-2 text-muted-foreground">Technologies I work with</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="scroll-reveal group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{cat.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
