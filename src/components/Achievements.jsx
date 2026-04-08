import { Award, BookOpen, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const achievements = [
  { title: 'JC Bose Award', year: '2025-26', desc: 'Showcasing Excellence in Innovation in RiG', icon: '🏆' },
  { title: 'Republic Day Recognition', year: '2026', desc: 'Kumaraguru College of Technology', icon: '🎖️' },
  { title: 'SN Bose Award', year: '2024-25', desc: 'Emerging Excellence in Innovation', icon: '🌟' },
  { title: 'Mahatma Gandhi Merit Scholarship', year: '2023-24', desc: 'Academic Excellence', icon: '🎓' },
];

const certifications = [
  { name: 'Machine Learning Foundations', issuer: 'AWS Academy', color: 'from-orange-500 to-amber-500' },
  { name: 'Advanced Learning Algorithms', issuer: 'DeepLearning.AI', color: 'from-blue-500 to-cyan-500' },
  { name: 'Unsupervised Learning, Recommenders & RL', issuer: 'DeepLearning.AI', color: 'from-blue-500 to-cyan-500' },
  { name: 'MySQL Problem Solving', issuer: 'HackerRank', color: 'from-green-500 to-emerald-500' },
  { name: 'Deep Learning, Python, Data Viz', issuer: 'Kaggle', color: 'from-cyan-500 to-blue-500' },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Achievements &" highlight="Certifications" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="reveal">
            <div className="glow-border p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Awards</h3>
              </div>

              <div className="space-y-3">
                {achievements.map((item, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 hover:bg-yellow-500/[0.02] transition-all duration-300 flex items-start gap-4"
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-white font-semibold text-sm truncate">{item.title}</h4>
                        <span className="text-xs font-mono text-primary-light shrink-0 px-2 py-0.5 rounded-full bg-primary/10">{item.year}</span>
                      </div>
                      <p className="text-muted text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal">
            <div className="glow-border p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <BookOpen className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${cert.color} shrink-0 group-hover:h-10 transition-all duration-300`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{cert.name}</p>
                      <p className="text-muted text-xs">{cert.issuer}</p>
                    </div>
                    <ChevronRight size={14} className="text-muted/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
