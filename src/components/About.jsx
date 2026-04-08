import { GraduationCap, MapPin, Code2, Brain, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const cards = [
  { icon: GraduationCap, title: 'Education', desc: 'B.E. Mechanical\nCGPA: 8.1/10', color: 'from-blue-500 to-cyan-500' },
  { icon: MapPin, title: 'Location', desc: 'Coimbatore\nIndia', color: 'from-green-500 to-emerald-500' },
  { icon: Code2, title: 'Problem Solving', desc: '303+ LeetCode\nProblems Solved', color: 'from-amber-500 to-orange-500' },
  { icon: Brain, title: 'Focus Areas', desc: 'ML, CV, NLP\nGenerative AI', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, title: 'Impact', desc: '50%+ ML\nImprovements', color: 'from-yellow-500 to-amber-500' },
  { icon: Users, title: 'Community', desc: 'Tech Blogger\nat Team Creo', color: 'from-indigo-500 to-violet-500' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionHeading title="About" highlight="Me" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3 space-y-5 reveal">
            <div className="glow-border p-8">
              <p className="text-muted leading-relaxed mb-5">
                I'm an <span className="text-white font-medium">AI Engineer</span> with a passion for building intelligent systems
                that solve real-world problems. Currently pursuing B.E. at
                <span className="text-primary-light font-medium"> Kumaraguru College of Technology</span>,
                I've transitioned into AI and Machine Learning, focusing on automation, computer vision, and generative AI.
              </p>
              <p className="text-muted leading-relaxed mb-5">
                As a <span className="text-accent font-medium">Level 3 Member at iQube Innovation Center</span>,
                I've worked on diverse ML projects achieving significant improvements in latency and accuracy.
                I've also solved 303+ LeetCode problems and participated in ML-focused CTF challenges.
              </p>
              <p className="text-muted leading-relaxed">
                I love writing technical articles on Web and AI Technologies at
                <span className="text-accent-pink font-medium"> Team Creo</span>, sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3 reveal">
            {cards.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="group glow-border p-5 hover:-translate-y-2 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-muted text-xs whitespace-pre-line leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
