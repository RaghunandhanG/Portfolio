import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Download,
  Menu,
  X,
  Check,
  Copy,
  Code2,
  Layers,
  MapPin,
} from "lucide-react";
import resume from "../Raghunandhan_G_AI_Engineer.pdf";

const projects = [
  {
    name: "WelVision",
    category: "Computer vision",
    type: "Vision",
    description:
      "Helping manufacturing see the details that matter. An industrial defect detection system with optimized object detection and model-assisted labeling.",
    metric: "40%",
    outcome: "lower inference latency",
    tags: ["Python", "OpenCV", "YOLO", "Roboflow"],
    details: [
      "Improved roller diameter estimation accuracy by 50%.",
      "Eliminated 80% of labeling effort, with 85% accuracy across 10,000+ images.",
    ],
    visual: "vision",
  },
  {
    name: "SGPA & CGPA Calculator",
    category: "Intelligent automation",
    type: "Automation",
    description:
      "From result PDFs to clear academic insights. Automated grade computation used by more than 1,000 students across multiple semesters.",
    metric: "95%",
    outcome: "less processing time",
    tags: ["Python", "PyMuPDF", "Streamlit", "Together.ai"],
    details: [
      "Extracts academic data directly from result PDFs.",
      "Automates SGPA and CGPA calculations, eliminating manual computation.",
    ],
    visual: "grades",
  },
  {
    name: "KCT Admissions Automation",
    category: "Generative AI",
    type: "GenAI",
    description:
      "Less paperwork. A smoother start. An LLM-powered backend that extracts student information from admission documents.",
    metric: "80%",
    outcome: "less manual data entry",
    tags: ["Flask", "Google GenAI", "PyPDF"],
    details: [
      "Auto-fills student onboarding data from uploaded PDFs.",
      "Achieved 60%+ structured extraction accuracy across 100 admission documents.",
    ],
    visual: "admissions",
  },
  {
    name: "AI Resume Builder",
    category: "Generative AI",
    type: "GenAI",
    description:
      "Turning career stories into structured resumes. An interactive builder combining LLMs with automated LaTeX generation.",
    metric: "80%",
    outcome: "less creation time",
    tags: ["LangChain", "Flask", "Google GenAI", "LaTeX"],
    details: [
      "Generates ATS-compliant resumes using LLMs and LaTeX.",
      "Uses LangChain to orchestrate prompts and PDFLaTeX to produce documents.",
    ],
    visual: "resume",
  },
];
const skills = [
  [
    "01",
    "Machine learning & vision",
    "PyTorch · TensorFlow · Scikit-learn · OpenCV · YOLO · Pandas · NumPy",
  ],
  [
    "02",
    "Generative AI & agents",
    "LangChain · LangGraph · Agno · Google GenAI · RAG · Vector databases",
  ],
  [
    "03",
    "Engineering & delivery",
    "Python · Java · C++ · JavaScript · FastAPI · Flask · Django · Streamlit · MySQL · Docker · Git",
  ],
];
const social = [
  ["GitHub", "https://github.com/RaghunandhanG"],
  ["LinkedIn", "https://linkedin.com/in/raghunandhan-g"],
  ["LeetCode", "https://leetcode.com/u/Raghunandhan_G/"],
];
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
function SectionTitle({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
function ProjectVisual({ kind }) {
  return (
    <div className={`project-visual ${kind}`} aria-hidden="true">
      <div className="visual-caption">
        <span className="tiny-dot" />
        {kind === "vision"
          ? "VISION SYSTEM / OBJECT DETECTION"
          : kind === "grades"
            ? "ACADEMIC INSIGHTS / AUTOMATED"
            : kind === "admissions"
              ? "DOCUMENT INTELLIGENCE / EXTRACTION"
              : "RESUME STUDIO / GENERATION"}
      </div>
      {kind === "vision" ? (
        <div className="detection-scene">
          <div className="roller r-one" />
          <div className="roller r-two" />
          <div className="roller r-three" />
          <div className="bounding-box">
            <span>ROLLER · DETECTED</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="scan-line" />
          <span className="visual-footnote">MODEL-ASSISTED INSPECTION</span>
        </div>
      ) : kind === "grades" ? (
        <div className="grade-ui">
          <div className="mini-header">
            <span>Academic overview</span>
            <span>↗</span>
          </div>
          <div className="grade-title">
            A clearer picture.
            <br />
            <strong>Every semester.</strong>
          </div>
          <div className="bars">
            {[40, 57, 48, 70, 64, 83, 91, 100].map((height, i) => (
              <i key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            <span>RESULT PDF</span>
            <span>INSTANT INSIGHTS ↗</span>
          </div>
        </div>
      ) : kind === "admissions" ? (
        <div className="document-flow">
          <div className="paper">
            <span>ADMISSION FORM</span>
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="flow-icon">
            <Layers size={26} />
          </span>
          <div className="extracted">
            <span>
              <Check size={12} /> Name extracted
            </span>
            <span>
              <Check size={12} /> Details structured
            </span>
            <span>
              <Check size={12} /> Ready to onboard
            </span>
          </div>
        </div>
      ) : (
        <div className="resume-visual">
          <div className="prompt">
            <span>✦</span> Your experience, thoughtfully structured.
          </div>
          <div className="resume-paper">
            <div className="paper-avatar" />
            <b>YOUR NEXT CHAPTER</b>
            <small>Experience meets opportunity</small>
            <hr />
            <i />
            <i />
            <i />
            <div className="paper-columns">
              <div>
                <i />
                <i />
              </div>
              <div>
                <i />
                <i />
              </div>
            </div>
          </div>
          <span className="latex-label">
            LaTeX → PDF <Check size={12} />
          </span>
        </div>
      )}
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [copyStatus, setCopyStatus] = useState("Copy email");
  const [openProject, setOpenProject] = useState(null);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("raghugopalan3105@gmail.com");
      setCopyStatus("Email copied!");
    } catch {
      setCopyStatus("Please copy: raghugopalan3105@gmail.com");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Raghunandhan home">
          &lt;rg <span>/&gt;</span>
        </a>
        <nav
          className={menuOpen ? "nav is-open" : "nav"}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {[
            ["Work", "projects"],
            ["About", "about"],
            ["Experience", "experience"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-intro">
            <span className="availability">
              <span /> Open to opportunities
            </span>
            <span className="location">
              <MapPin size={13} /> Coimbatore, India
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">// RAGHUNANDHAN G</p>
              <h1>
                Engineering
                <br />
                the systems
                <br />
                <span>behind the AI.</span>
              </h1>
              <p className="hero-description">
                Software Engineer at Protecto.ai. Backend engineering, machine
                learning, and agents that bring ideas to life.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  view_projects() <ArrowDown size={17} />
                </a>
                <a className="text-link" href={resume} download>
                  Download résumé <Download size={16} />
                </a>
              </div>
            </div>
            <div className="engineer-terminal" aria-label="Engineer profile">
              <div className="terminal-titlebar">
                <span className="terminal-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>engineer.ts</span>
                <Code2 size={14} aria-hidden="true" />
              </div>
              <pre className="terminal-code">
                <code>
                  <span className="syntax-blue">const</span>
                  {" engineer = {\n"}
                  {"  name: "}
                  <span className="syntax-mint">'Raghunandhan'</span>
                  {",\n"}
                  {"  role: "}
                  <span className="syntax-mint">'Software Engineer'</span>
                  {",\n"}
                  {"  team: "}
                  <span className="syntax-mint">'Protecto.ai'</span>
                  {",\n"}
                  {"  focus: [\n"}
                  {"    "}
                  <span className="syntax-mint">'Backend'</span>
                  {",\n"}
                  {"    "}
                  <span className="syntax-mint">'AI / ML'</span>
                  {",\n"}
                  {"    "}
                  <span className="syntax-mint">'Agents'</span>
                  {"\n"}
                  {"  ]\n};"}
                </code>
              </pre>
              <div className="terminal-status">
                <span aria-hidden="true">↳</span> curiosity meets implementation
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>BUILT WITH CURIOSITY. BACKED BY CODE.</span>
            <div>
              {social.map(([label, url]) => (
                <a href={url} key={label} target="_blank" rel="noreferrer">
                  {label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="expertise-strip">
          <div className="container">
            <span>Machine Learning</span>
            <span className="asterisk">✳</span>
            <span>Computer Vision</span>
            <span className="asterisk">✳</span>
            <span>Generative AI</span>
            <span className="asterisk">✳</span>
            <span>Thoughtful Engineering</span>
          </div>
        </div>
        <section id="projects" className="section container">
          <SectionTitle
            number="01"
            label="SELECTED WORK"
            title={
              <>
                Real problems.
                <br />
                <span className="muted">Tangible outcomes.</span>
              </>
            }
          >
            <p>
              A selection of things I’ve built.
              <br />
              From industrial vision to everyday automation.
            </p>
          </SectionTitle>
          <div className="filters" role="group" aria-label="Filter projects">
            {["All work", "Vision", "GenAI", "Automation"].map((item) => (
              <button
                key={item}
                aria-pressed={filter === item}
                className={filter === item ? "active" : ""}
                onClick={() => {
                  setFilter(item);
                  setOpenProject(null);
                }}
              >
                {item}
                {item === "All work" && <span>04</span>}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {projects
              .filter(
                (project) => filter === "All work" || project.type === filter,
              )
              .map((project) => (
                <article className="project-card" key={project.name}>
                  <ProjectVisual kind={project.visual} />
                  <div className="project-body">
                    <p className="eyebrow">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <Tags items={project.tags} />
                    <div className="project-bottom">
                      <div>
                        <strong>{project.metric}</strong>
                        <span>{project.outcome}</span>
                      </div>
                      <button
                        className="circle-button"
                        aria-label={`${openProject === project.name ? "Hide" : "Show"} details for ${project.name}`}
                        aria-expanded={openProject === project.name}
                        aria-controls={`details-${project.visual}`}
                        onClick={() =>
                          setOpenProject(
                            openProject === project.name ? null : project.name,
                          )
                        }
                      >
                        {openProject === project.name ? (
                          <X size={19} />
                        ) : (
                          <ArrowUpRight size={20} />
                        )}
                      </button>
                    </div>
                    <div
                      id={`details-${project.visual}`}
                      hidden={openProject !== project.name}
                      className="project-details"
                    >
                      <h4>Behind the build</h4>
                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <a
            className="text-link github-link"
            href="https://github.com/RaghunandhanG"
            target="_blank"
            rel="noreferrer"
          >
            More experiments on GitHub <ArrowUpRight size={16} />
          </a>
        </section>
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">
                <span>02 /</span> THE PERSON BEHIND THE CODE
              </p>
              <h2>
                Curiosity is
                <br />
                my <span className="serif">starting point.</span>
              </h2>
            </div>
            <div>
              <p>
                I’m Raghunandhan, a Software Engineer at Protecto.ai with a
                mechanical engineering background at Kumaraguru College of
                Technology. I’m drawn to the space where an interesting idea
                becomes something people can actually use.
              </p>
              <p>
                At iQube Innovation Center, I’ve explored everything from
                industrial computer vision to intelligent automation. Outside
                the build, I solve algorithmic problems and share what I learn
                about web and AI technologies at Team Creo.
              </p>
              <div className="about-stats">
                <div>
                  <strong>303+</strong>
                  <span>LeetCode problems solved</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Featured projects</span>
                </div>
                <div>
                  <strong>
                    8.1<span>/10</span>
                  </strong>
                  <span>Engineering CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section container">
          <SectionTitle
            number="03"
            label="THE JOURNEY"
            title={
              <>
                Learning by <span className="serif">building.</span>
              </>
            }
          >
            <a className="text-link" href={resume} download>
              Full résumé <Download size={16} />
            </a>
          </SectionTitle>
          <div className="experience-row">
            <div>
              <span className="experience-date">SEP 2026 — PRESENT</span>
              <span className="company-mark">P</span>
            </div>
            <div>
              <h3>Software Engineer</h3>
              <p className="company">Protecto.ai</p>
              <p>
                Working on backend engineering, AI and machine learning, and AI
                agents.
              </p>
              <Tags items={["Backend Engineering", "AI / ML", "AI Agents"]} />
            </div>
            <span className="experience-number">01</span>
          </div>
          <div className="experience-row">
            <div>
              <span className="experience-date">OCT — DEC 2025</span>
              <span className="company-mark zoho">Z</span>
            </div>
            <div>
              <h3>Project Trainee</h3>
              <p className="company">Zoho Corporation</p>
              <p>
                Made model behavior easier to understand with SHAP and Captum.
                Implemented 3+ attribution methods and automated feature-level
                analysis, reducing manual analysis time by approximately 90%.
              </p>
              <Tags
                items={[
                  "Python",
                  "FastAPI",
                  "SHAP",
                  "Captum",
                  "PyTorch",
                  "Java",
                ]}
              />
            </div>
            <span className="experience-number">02</span>
          </div>
          <div className="experience-row">
            <div>
              <span className="experience-date">
                PAST ROLE · STARTED SEP 2022
              </span>
              <span className="company-mark">iQ</span>
            </div>
            <div>
              <h3>AI Engineer</h3>
              <p className="company">iQube Innovation Center, KCT</p>
              <p>
                Built and optimized machine learning systems, with around 50%
                improvements in project latency and accuracy. A Level 3 member
                who explored applied ML, deep learning, and technical
                challenges.
              </p>
              <Tags
                items={["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV"]}
              />
            </div>
            <span className="experience-number">03</span>
          </div>
        </section>
        <section className="toolkit-section">
          <div className="container toolkit-grid">
            <div>
              <p className="eyebrow">
                <span>04 /</span> THE TOOLKIT
              </p>
              <h2>
                The right tools.
                <br />
                <span className="muted">A builder’s mindset.</span>
              </h2>
              <Code2 size={44} strokeWidth={1} />
            </div>
            <div>
              {skills.map(([number, title, tools]) => (
                <div className="skill-row" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section container recognition">
          <SectionTitle
            number="05"
            label="ALONG THE WAY"
            title="A little recognition."
          />
          <div className="awards">
            {[
              ["2025–26", "JC Bose Award", "Excellence in Innovation · RiG"],
              [
                "2026",
                "Republic Day Recognition",
                "Kumaraguru College of Technology",
              ],
              ["2024–25", "SN Bose Award", "Emerging Excellence in Innovation"],
              [
                "2023–24",
                "Mahatma Gandhi Merit Scholarship",
                "Academic Excellence",
              ],
            ].map(([year, title, description]) => (
              <div className="award" key={title}>
                <span>{year}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="award-star">✳</span>
              </div>
            ))}
          </div>
          <details className="certifications">
            <summary>
              Continuous learning <span>Certifications +</span>
            </summary>
            <div>
              <p>
                <strong>AWS Academy</strong> · Machine Learning Foundations
              </p>
              <p>
                <strong>DeepLearning.AI</strong> · Advanced Learning Algorithms;
                Unsupervised Learning, Recommenders & RL
              </p>
              <p>
                <strong>HackerRank</strong> · MySQL Problem Solving
              </p>
              <p>
                <strong>Kaggle</strong> · Deep Learning, Python & Data
                Visualization
              </p>
            </div>
          </details>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <p className="eyebrow">
              <span className="tiny-dot" /> HAVE SOMETHING IN MIND?
            </p>
            <div className="contact-heading">
              <h2>
                Let’s build
                <br />
                something <span className="serif">meaningful.</span>
              </h2>
              <a
                href="mailto:raghugopalan3105@gmail.com"
                className="contact-arrow"
                aria-label="Email Raghunandhan"
              >
                <ArrowUpRight size={58} strokeWidth={1} />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>New opportunities, interesting problems, or just a hello.</p>
                <a
                  className="email-link"
                  href="mailto:raghugopalan3105@gmail.com"
                >
                  raghugopalan3105@gmail.com
                </a>
                <button
                  className="copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  <Copy size={16} />
                </button>
                <span className="copy-status" role="status">
                  {copyStatus !== "Copy email" ? copyStatus : ""}
                </span>
              </div>
              <a className="text-link" href="tel:+918220398055">
                +91 82203 98055 <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          &lt;rg <span>/&gt;</span>
        </a>
        <p>© {new Date().getFullYear()} Raghunandhan G</p>
        <div>
          {social.map(([label, url]) => (
            <a key={label} href={url} target="_blank" rel="noreferrer">
              {label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
        <a className="back-top" href="#home">
          Back to top <ArrowRight size={15} />
        </a>
      </footer>
    </>
  );
}
