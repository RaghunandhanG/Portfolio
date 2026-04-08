import { ExternalLink, ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'WelVision',
    description: 'Industrial defect detection system using optimized object detection pipelines with model-assisted data labeling for manufacturing environments.',
    points: [
      'Enhanced roller diameter estimation accuracy by 50% and decreased inference latency by 40%.',
      'Built a model-assisted labeling pipeline eliminating 80% of labeling effort with 85% accuracy across 10,000+ images.',
    ],
    tech: ['Python', 'OpenCV', 'YOLO', 'Roboflow', 'Snap7', 'Tkinter', 'MySQL'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    icon: '🔍',
  },
  {
    title: 'SGPA & CGPA Calculator',
    description: 'Automated academic grade computation from result PDFs used by 1,000+ students across multiple semesters.',
    points: [
      'Extracts academic data from result PDFs and computes SGPA and CGPA automatically.',
      'Reduced per-result processing time by 95%, eliminating 100% manual computation.',
    ],
    tech: ['Python', 'PyMuPDF', 'Streamlit', 'Together.ai'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: '📊',
  },
  {
    title: 'KCT Admissions Automation',
    description: 'Backend API for auto-filling student onboarding data from PDFs using LLM-assisted extraction.',
    points: [
      'Reduced manual data entry time by 80% with automated PDF extraction.',
      'Achieved 60%+ structured data extraction accuracy on 100 admission documents.',
    ],
    tech: ['Python', 'Flask', 'Google GenAI', 'PyPDF'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    icon: '🤖',
  },
  {
    title: 'AI Resume Builder',
    description: 'Interactive system generating ATS-compliant resumes using LLMs and LaTeX code generation.',
    points: [
      'Reduced resume creation time by 80% through automated LaTeX generation.',
      'Built with LangChain for intelligent prompt orchestration.',
    ],
    tech: ['Python', 'Flask', 'LangChain', 'Google GenAI', 'PDFLaTeX'],
    gradient: 'from-orange-500 via-rose-500 to-pink-500',
    icon: '📄',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Featured" highlight="Projects" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="reveal group">
              <div className="glow-border h-full p-7 hover:-translate-y-2 transition-all duration-500">
                {/* Gradient top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6 opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href="https://github.com/RaghunandhanG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all group/link"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>

                <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {project.points.map((point, j) => (
                    <li key={j} className="text-muted text-sm flex gap-2.5">
                      <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted/80 font-mono">
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
