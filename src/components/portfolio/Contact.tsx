import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "prathamshetty6123@gmail.com", href: "mailto:prathamshetty6123@gmail.com" },
  { icon: Github, label: "github.com/prathamshetty231", href: "https://github.com/prathamshetty231" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/pratham-shetty-624853340" },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content text-center">
        <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">Get In Touch</h2>
        <p className="scroll-reveal mt-2 text-muted-foreground">
          I'm open to internships, collaborations, and entry-level opportunities.
        </p>

        <div className="scroll-reveal mx-auto mt-10 max-w-md rounded-lg border border-border bg-card p-8 shadow-card">
          <div className="flex flex-col gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-card-hover"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
