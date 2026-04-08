import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Profiles', href: '#profiles' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg shadow-primary/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
          &lt;RG /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm px-3 py-2 rounded-lg transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-white bg-primary/10'
                  : 'text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </a>
          ))}
          <a
            href="/Raghunandhan_G_AI_Engineer.pdf"
            target="_blank"
            className="ml-3 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-primary/10 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Raghunandhan_G_AI_Engineer.pdf"
              target="_blank"
              className="mt-2 text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-center font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
