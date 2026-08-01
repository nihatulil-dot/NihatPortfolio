import Container from "@/lib/container";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-zinc-800 py-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Let's <span className="text-blue-500">Collaborate</span>
            </h2>
            <p className="mt-3 max-w-md text-zinc-400">
              Open for data science projects, quant research, or just a chat about markets.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/6289676064423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-blue-400">
              +62 813 3748 8085
            </a>

            <a href="https://instagram.com/afzainizam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @nhat.uiel
            </a>

            <a href="mailto:afzainizam.nf11@gmail.com" className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300 transition hover:border-blue-500 hover:text-blue-400">
              <Mail size={16} />
              nihatulil@gmail.com
            </a>
          </div>

          <div className="h-px w-full max-w-4xl bg-zinc-800" />

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Muhammad Nihat Ulil Amri. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}