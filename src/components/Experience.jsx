import { Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Project Trainee',
    company: 'Zoho Corporation',
    period: 'Oct 2025 - Dec 2025',
    points: [
      'Implemented 3+ model attribution methods using SHAP and Captum frameworks.',
      'Automated feature-level analysis workflows, reducing manual analysis time by ~90%.',
      'Gained hands-on experience with Core Java and Python.',
    ],
    tech: ['Python', 'FastAPI', 'SHAP', 'Captum', 'PyTorch', 'JavaScript', 'Java'],
    gradient: 'from-blue-500 to-cyan-500',
    dotColor: 'bg-blue-500',
  },
  {
    title: 'AI Engineer',
    company: 'iQube Innovation Center, KCT',
    period: 'Sep 2022 - Present',
    points: [
      'Achieved around 50% improvement in latency and accuracy in Machine Learning projects.',
      'Solved 220+ LeetCode problems covering arrays, trees, linked lists, recursion, and DP.',
      'Participated in 2+ CTF challenges, applying ML and DL concepts to solve challenges.',
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV'],
    gradient: 'from-purple-500 to-pink-500',
    dotColor: 'bg-purple-500',
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-28 px-6 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Work" highlight="Experience" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="reveal group">
              <div className="glow-border p-8 hover:-translate-y-1 transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg`}>
                        <Briefcase className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary-light text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted text-sm">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted text-sm flex gap-3 group/item">
                      <ArrowRight size={14} className="text-primary mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span className="group-hover/item:text-white/80 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-muted border border-white/10 hover:border-primary/30 hover:text-primary-light transition-all duration-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
