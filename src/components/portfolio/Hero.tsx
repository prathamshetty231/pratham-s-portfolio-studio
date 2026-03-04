import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <div className="mx-auto max-w-[600px] text-center">
        <p className="animate-fade-up text-sm tracking-widest text-muted-foreground" style={{ animationDelay: "0ms" }}>
          👋 Hey, I'm
        </p>
        <h1 className="animate-fade-up mt-4 font-display text-5xl font-bold leading-tight text-foreground md:text-6xl" style={{ animationDelay: "100ms" }}>
          Pratham Prashant Shetty
        </h1>
        <p className="animate-fade-up mt-4 text-xl text-muted-foreground md:text-2xl" style={{ animationDelay: "200ms" }}>
          CS Student & Web Dev Enthusiast
        </p>
        <p className="animate-fade-up mt-6 text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "300ms", lineHeight: 1.8 }}>
          I'm a second-year Information Technology student at Xavier Institute of Engineering, Mumbai.
          I'm drawn to web development and love the idea of building things people can actually use.
          I'm currently sharpening my skills in Python, JavaScript, and web technologies — learning something new every day.
          I'm still exploring where tech will take me, but I'm excited about the journey.
        </p>

        <div className="animate-fade-up mt-8 flex items-center justify-center gap-4" style={{ animationDelay: "400ms" }}>
          <a href="#projects" className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-hover">
            View My Work
          </a>
          <a href="#contact" className="rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-btn-hover">
            Get In Touch
          </a>
        </div>

        <div className="animate-fade-up mt-10 flex items-center justify-center gap-4 text-sm text-muted-foreground" style={{ animationDelay: "500ms" }}>
          <span>2nd Year</span>
          <span className="h-4 w-px bg-border" />
          <span>Xavier Institute of Engineering</span>
          <span className="h-4 w-px bg-border" />
          <span>Mumbai, Maharashtra</span>
        </div>
      </div>

      <div className="animate-bounce-arrow mt-auto mb-8">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
}
