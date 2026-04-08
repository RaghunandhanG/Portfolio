import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'C++', 'Java', 'JavaScript'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLO', 'Pandas', 'NumPy'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'GenAI & Agents',
    icon: '🤖',
    skills: ['LangChain', 'LangGraph', 'Agno', 'Google GenAI', 'LLMs', 'RAG'],
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Backend',
    icon: '⚡',
    skills: ['FastAPI', 'Flask', 'Streamlit', 'Django'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'Vector Databases'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker'],
    gradient: 'from-rose-500 to-red-500',
  },
];

const domains = [
  { name: 'EDA', icon: '📈' },
  { name: 'Machine Learning', icon: '🔬' },
  { name: 'Deep Learning', icon: '🧬' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'NLP', icon: '💬' },
  { name: 'Generative AI', icon: '✨' },
  { name: 'Agentic AI', icon: '🤖' },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal">
          <SectionHeading title="Technical" highlight="Skills" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillCategories.map((category, i) => (
            <div key={i} className="reveal group">
              <div className="glow-border p-6 h-full hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-white font-semibold">{category.title}</h3>
                  <div className={`ml-auto h-0.5 w-8 rounded-full bg-gradient-to-r ${category.gradient} opacity-40 group-hover:opacity-100 group-hover:w-12 transition-all duration-500`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag relative text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-muted hover:text-white cursor-default transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domains */}
        <div className="reveal">
          <div className="glow-border p-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-6">
              Domain <span className="gradient-text">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {domains.map((domain) => (
                <span
                  key={domain.name}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 text-muted hover:text-white hover:border-primary/30 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">{domain.icon}</span>
                  <span className="text-sm font-medium">{domain.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
