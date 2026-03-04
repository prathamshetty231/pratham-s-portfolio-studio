import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-content text-center">
        <p className="font-display text-lg font-bold text-foreground">Pratham Prashant Shetty</p>
        <p className="mt-1 text-sm text-muted-foreground">Building one line of code at a time. 🚀</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a href="https://github.com/prathamshetty231" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/pratham-shetty-624853340" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin size={18} /></a>
          <a href="mailto:prathamshetty6123@gmail.com" className="text-muted-foreground transition-colors hover:text-primary"><Mail size={18} /></a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">© 2026 Pratham Prashant Shetty. All rights reserved.</p>
      </div>
    </footer>
  );
}
