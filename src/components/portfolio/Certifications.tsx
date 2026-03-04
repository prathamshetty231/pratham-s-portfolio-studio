import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Cyber Security & Digital Forensics Programme",
    issuer: "AIIPL, Navi Mumbai",
    type: "Industrial Visit",
  },
  {
    title: "HackXcelerate Hackathon, VJTI",
    issuer: "Unstop",
    type: "Hackathon",
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content text-center">
        <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">Certifications</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 mx-auto max-w-2xl">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="scroll-reveal group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />
              <Award size={24} className="text-primary mb-3" />
              <h3 className="font-display text-sm font-bold text-foreground">{cert.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Issued by {cert.issuer}</p>
              <span className="mt-3 inline-block rounded-md bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                {cert.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
