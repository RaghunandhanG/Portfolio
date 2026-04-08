import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Get in" highlight="Touch" />
          <p className="text-center text-muted mb-12 max-w-xl mx-auto -mt-8">
            I'm always open to discussing new opportunities, projects, or collaborations. Let's build something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="reveal grid sm:grid-cols-3 gap-5 mb-12">
          <a
            href="mailto:raghugopalan3105@gmail.com"
            className="group glow-border p-6 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <p className="text-muted text-sm break-all">raghugopalan3105@gmail.com</p>
          </a>

          <a
            href="tel:+918220398055"
            className="group glow-border p-6 text-center hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-1">Phone</h3>
            <p className="text-muted text-sm">+91 82203 98055</p>
          </a>

          <div className="group glow-border p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-muted text-sm">Coimbatore, India</p>
          </div>
        </div>

        {/* Social links */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/RaghunandhanG"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl glow-border hover:-translate-y-1 transition-all duration-300"
          >
            <GithubIcon size={20} className="text-white" />
            <span className="text-white text-sm font-medium">GitHub</span>
            <ArrowUpRight size={14} className="text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
          <a
            href="https://linkedin.com/in/raghunandhan-g"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl glow-border hover:-translate-y-1 transition-all duration-300"
          >
            <LinkedinIcon size={20} className="text-blue-400" />
            <span className="text-white text-sm font-medium">LinkedIn</span>
            <ArrowUpRight size={14} className="text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
          <a
            href="mailto:raghugopalan3105@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
          >
            <Send size={16} />
            <span className="text-sm font-medium">Send Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
