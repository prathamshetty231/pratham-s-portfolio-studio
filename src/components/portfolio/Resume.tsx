import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download } from "lucide-react";

export default function Resume() {
  const ref = useScrollReveal();

  return (
    <>
      <section ref={ref} className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-content text-center">
          <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">Resume</h2>
          <p className="scroll-reveal mt-2 text-muted-foreground">Download a copy of my resume</p>

          <div className="scroll-reveal mx-auto mt-10 max-w-2xl overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <div className="border-b border-border bg-secondary/50 px-6 py-4 text-left">
              <h3 className="font-display text-lg font-bold text-foreground">Pratham Prashant Shetty</h3>
              <p className="text-sm text-muted-foreground">CS Student & Web Dev Enthusiast</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                prathamshetty6123@gmail.com · github.com/prathamshetty231 · Mumbai, MH
              </p>
            </div>
            <div className="space-y-4 px-6 py-5 text-left text-sm">
              {[
                { t: "Career Objective", c: "Aspiring web developer seeking opportunities to apply and expand my technical skills." },
                { t: "Education", c: "Xavier Institute of Engineering — BE IT (2024–2028) · CGPA: 7.41/10" },
                { t: "Skills", c: "Python, C, JavaScript, SQL, HTML, CSS, React, Flask, MySQL, Git, GitHub" },
                { t: "Projects", c: "Cognify — Stress-aware task manager (Flask, MySQL, JS) — In Development" },
                { t: "Hackathons", c: "SIH 2025 · HackXelerate 2026" },
              ].map(({ t, c }) => (
                <div key={t}>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{t}</p>
                  <p className="mt-1 text-muted-foreground">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-hover"
          >
            <Download size={16} /> Download Resume (PDF)
          </button>
        </div>
      </section>

      {/* Hidden printable resume */}
      <div id="resume-print" className="hidden print:block p-10 font-body text-sm" style={{ color: "#18181B" }}>
        <h1 className="font-display text-2xl font-bold" style={{ color: "#8B5CF6" }}>Pratham Prashant Shetty</h1>
        <p>CS Student & Web Dev Enthusiast</p>
        <p className="font-mono text-xs">prathamshetty6123@gmail.com · github.com/prathamshetty231 · Mumbai, Maharashtra</p>
        <hr className="my-4" style={{ borderColor: "#8B5CF6" }} />
        <h2 className="font-display font-bold" style={{ color: "#8B5CF6" }}>Career Objective</h2>
        <p>Aspiring web developer seeking internship opportunities to apply and expand my technical skills in real-world projects.</p>
        <h2 className="mt-3 font-display font-bold" style={{ color: "#8B5CF6" }}>Education</h2>
        <p>Xavier Institute of Engineering — BE in Information Technology (2024–2028) · CGPA: 7.41/10</p>
        <h2 className="mt-3 font-display font-bold" style={{ color: "#8B5CF6" }}>Skills</h2>
        <p>Python, C, JavaScript, SQL, HTML, CSS, React (Basics), Flask, MySQL, Git, GitHub, Data Structures, DBMS, OS, CN</p>
        <h2 className="mt-3 font-display font-bold" style={{ color: "#8B5CF6" }}>Projects</h2>
        <p><strong>Cognify</strong> — Stress-aware task manager built with HTML, CSS, JavaScript, Python, Flask, MySQL. (In Development)</p>
        <h2 className="mt-3 font-display font-bold" style={{ color: "#8B5CF6" }}>Hackathons</h2>
        <p>Smart India Hackathon 2025 · HackXelerate 2026 (VJTI, Mumbai)</p>
        <h2 className="mt-3 font-display font-bold" style={{ color: "#8B5CF6" }}>Soft Skills</h2>
        <p>Problem Solving, Team Collaboration, Communication, Adaptability, Time Management</p>
      </div>
    </>
  );
}
