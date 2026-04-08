import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <a href="#" className="text-xl font-bold gradient-text">&lt;RG /&gt;</a>
          </div>
          <p className="text-muted/60 text-sm flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Raghunandhan G &middot; Built with
            <Heart size={12} className="text-red-400 animate-pulse" />
            using React & Tailwind
          </p>
          <a
            href="#"
            className="group p-2 rounded-lg border border-white/10 text-muted hover:text-white hover:border-primary/30 transition-all"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}
