import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content text-center">
        <h2 className="scroll-reveal font-display text-3xl font-bold text-foreground md:text-4xl">Certifications</h2>
        <div className="scroll-reveal mx-auto mt-10 max-w-md rounded-lg border-2 border-dashed border-border p-10">
          <p className="text-muted-foreground">Certifications coming soon — currently learning and growing! 🌱</p>
        </div>
      </div>
    </section>
  );
}
