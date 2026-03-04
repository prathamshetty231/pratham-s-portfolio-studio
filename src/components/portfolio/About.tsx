import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const terminalLines = [
  "> name: Pratham Prashant Shetty",
  "> role: CS Student & Web Dev Enthusiast",
  "> university: Xavier Institute of Engineering",
  "> year: 2nd Year (2024–2028)",
  "> cgpa: 7.41 / 10",
  "> languages: English, Hindi, Marathi",
  "> status: Open to Internships ✓",
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || currentLine >= terminalLines.length) return;
    const line = terminalLines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), 25);
      return () => clearTimeout(t);
    } else {
      setVisibleLines((prev) => [...prev, line]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }
  }, [started, currentLine, currentChar]);

  const typingLine = currentLine < terminalLines.length ? terminalLines[currentLine].slice(0, currentChar) : null;

  return (
    <div ref={ref} className="rounded-lg border border-border bg-card p-6 shadow-card">
      <div className="flex gap-1.5 mb-4">
        <span className="h-3 w-3 rounded-full bg-destructive/60" />
        <span className="h-3 w-3 rounded-full bg-warning/60" />
        <span className="h-3 w-3 rounded-full bg-success/60" />
      </div>
      <div className="font-mono text-sm leading-8">
        {visibleLines.map((line, i) => (
          <div key={i}><span className="text-primary">&gt;</span>{line.slice(1)}</div>
        ))}
        {typingLine !== null && (
          <div>
            <span className="text-primary">&gt;</span>{typingLine.slice(1)}
            <span className="animate-cursor">|</span>
          </div>
        )}
      </div>
    </div>
  );
}

const highlights = [
  { emoji: "🎓", title: "Xavier Institute of Engineering", sub: "BE in IT, 2024–2028" },
  { emoji: "💡", title: "Web Development", sub: "Primary interest" },
  { emoji: "🌐", title: "Mumbai, Maharashtra", sub: "Based in" },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" ref={sectionRef} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">About Me</h2>
            <p className="scroll-reveal mt-6 text-base leading-relaxed text-muted-foreground md:text-lg" style={{ lineHeight: 1.8 }}>
              I'm a second-year Information Technology student at Xavier Institute of Engineering, Mumbai.
              I'm drawn to web development and love the idea of building things people can actually use.
              I'm currently sharpening my skills in Python, JavaScript, and web technologies — learning something new every day.
              I'm still exploring where tech will take me, but I'm excited about the journey.
            </p>
            <div className="scroll-reveal mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-lg border border-border bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover">
                  <span className="text-2xl">{h.emoji}</span>
                  <p className="mt-2 text-sm font-semibold text-foreground">{h.title}</p>
                  <p className="text-xs text-muted-foreground">{h.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-reveal md:col-span-2">
            <TerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
