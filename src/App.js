import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

/* ─── SVG Icon Components ─── */
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
  </svg>
);

/* ─── Typing Effect Hook ─── */
function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

/* ─── Intersection Observer Hook ─── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, ...options });

    const current = ref.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, [options]);

  return [ref, isVisible];
}

/* ─── Section Component ─── */
function Section({ id, label, title, desc, children, className = '' }) {
  const [ref, isVisible] = useInView();

  return (
    <section id={id} className={`section ${className}`} ref={ref}>
      <div className="section-container">
        <div className={`section-header fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="section-label">{label}</span>
          <h2 className="section-title">{title}</h2>
          {desc && <p className="section-desc">{desc}</p>}
        </div>
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {children}
        </div>
      </div>
    </section>
  );
}

/* ─── Main App ─── */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const typedText = useTypingEffect([
    'Aspiring Data Scientist',
    'MERN Stack Developer',
    'Machine Learning Explorer',
    'Data Analyst',
    'Open Source Contributor'
  ]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const [heroRef, heroVisible] = useInView();
  const [aboutRef, aboutVisible] = useInView();

  return (
    <div className="App">
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            {'<AS />'}
          </a>

          <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.toLowerCase()); }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Let's Talk
            </a>
          </div>

          <button
            className={`mobile-toggle ${mobileMenu ? 'active' : ''}`}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="hero" className="hero" ref={heroRef}>
        <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-text fade-up" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease' }}>
            <div className="hero-badge">
              <span className="pulse" />
              Open to Opportunities
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">Abhisar Sharma</span>
            </h1>

            <p className="hero-subtitle">
              <span className="typing-text">{typedText}</span>
              <br /><br />
              Aspiring <strong>Data Scientist</strong> and <strong>BTech CSIT</strong> student at
              Symbiosis University, with a strong background as a <strong>MERN Stack Developer</strong>.
              Passionate about leveraging data-driven insights and building robust web applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
                View Projects <ArrowDown />
              </a>
              <a
                href="https://github.com/Abhisar-else"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon /> GitHub
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Abhisar-else" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="mailto:abhisarsharma2006@gmail.com" className="social-icon" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual fade-up" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.3s' }}>
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-avatar">AS</div>
                <div>
                  <div className="hero-card-name">Abhisar Sharma</div>
                  <div className="hero-card-role">Data Science • MERN Stack</div>
                </div>
              </div>

              <div className="hero-card-stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Repos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Certs</div>
                </div>
              </div>

              <div className="hero-card-tech">
                {['Python', 'MERN Stack', 'Machine Learning', 'Pandas', 'React', 'SQL'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="section" ref={aboutRef}>
        <div className="section-container">
          <div className={`section-header fade-up ${aboutVisible ? 'visible' : ''}`}>
            <span className="section-label">{"// About Me"}</span>
            <h2 className="section-title">Know Who I Am</h2>
            <p className="section-desc">
              A passionate developer building impactful digital experiences
            </p>
          </div>

          <div className={`about-grid fade-up ${aboutVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="about-text">
              <p>
                I'm <strong>Abhisar Sharma</strong>, a BTech Computer Science & Information Technology student at{' '}
                <strong>Symbiosis University of Applied Sciences</strong>, Indore (IV semester).
                I am an aspiring <strong>Data Scientist</strong> with professional experience working as a 
                <strong> MERN Stack Developer</strong>.
              </p>
              <p>
                With hands-on experience in building web applications and a strong academic focus on data analytics,
                I specialize in bridging the gap between robust software engineering and data-driven intelligence.
                I was a <strong>Web Developer Intern at UptoSkills</strong> and am an active <strong>IEEE student member</strong>.
              </p>
              <p>
                Currently working on <strong>"A Distributed Framework for Mobile-Based Data Collection"</strong>
                {' '}— a mobile-first distributed survey platform featuring offline-first sync, conflict resolution, and secure authentication.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <div>
                    <div className="highlight-label">University</div>
                    <div className="highlight-value">SUAS, Indore</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📍</span>
                  <div>
                    <div className="highlight-label">Location</div>
                    <div className="highlight-value">Greater Indore, India</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💼</span>
                  <div>
                    <div className="highlight-label">Experience</div>
                    <div className="highlight-value">Web Dev Intern</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏅</span>
                  <div>
                    <div className="highlight-label">IEEE</div>
                    <div className="highlight-value">Active Member</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">abhisar@portfolio ~ %</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">whoami</span>
                </div>
                <div className="terminal-output">Abhisar Sharma</div>
                <br />
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">cat role.txt</span>
                </div>
                <div className="terminal-output">Data Science + MERN Stack</div>
                <br />
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">ls skills/</span>
                </div>
                <div className="terminal-output">
                  Python/ ML/ Pandas/ SQL/<br />
                  MongoDB/ Express/ React/ Node/
                </div>
                <br />
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cmd">cat motto.txt</span>
                </div>
                <div className="terminal-output">"Build it offline-first, sync it later." ⚡</div>
                <br />
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SKILLS ═══════════════ */}
      <Section
        id="skills"
        label="// Tech Stack"
        title="Skills & Technologies"
        desc="Technologies I've been working with and continuously learning"
      >
        <div className="skills-grid stagger-children visible">
          {[
            {
              icon: '🧠',
              title: 'Data Science & ML',
              skills: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-Learn', 'KNIME', 'Data Analysis']
            },
            {
              icon: '🌐',
              title: 'MERN Stack',
              skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'REST APIs', 'JWT Auth']
            },
            {
              icon: '🗄️',
              title: 'Database & Storage',
              skills: ['MySQL', 'SQLite', 'MongoDB', 'SQL queries', 'SharedPreferences']
            },
            {
              icon: '📱',
              title: 'Mobile Development',
              skills: ['Flutter', 'Dart', 'Android Studio', 'Mobile Sync']
            },
            {
              icon: '🛠️',
              title: 'Tools & Platforms',
              skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Maps API']
            },
            {
              icon: '⚙️',
              title: 'Other Skills',
              skills: ['Java', 'C#', 'Distributed Systems', 'Offline-First Sync', 'IoT']
            }
          ].map((cat) => (
            <div key={cat.title} className="skill-category">
              <div className="skill-category-icon">{cat.icon}</div>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ EXPERIENCE ═══════════════ */}
      <Section
        id="experience"
        label="// Career"
        title="Experience"
        desc="Professional journey and learning experiences"
      >
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">June 2025 — September 2025</div>
              <div className="timeline-role">MERN Stack Developer Intern</div>
              <div className="timeline-company">UptoSkills</div>
              <p className="timeline-desc">
                Developed and optimized full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). 
                Built responsive user interfaces, integrated RESTful APIs, and managed server-side logic for real-world projects.
              </p>
              <div className="timeline-tech-tags">
                {['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'].map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">2024 — Present</div>
              <div className="timeline-role">Active IEEE Member</div>
              <div className="timeline-company">IEEE Student Branch, SUAS</div>
              <p className="timeline-desc">
                Participating in technical events, workshops, and hackathons. Contributing to
                the student tech community and exploring cutting-edge research domains.
              </p>
              <div className="timeline-tech-tags">
                {['Leadership', 'Networking', 'Technical Events'].map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-date">2024 — Present</div>
              <div className="timeline-role">BTech CS Student & Builder</div>
              <div className="timeline-company">Symbiosis University of Applied Sciences</div>
              <p className="timeline-desc">
                Building projects, exploring distributed systems, mobile development with Flutter,
                and diving deep into Data Science and Machine Learning fundamentals.
              </p>
              <div className="timeline-tech-tags">
                {['Flutter', 'Python', 'Distributed Systems', 'ML'].map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <Section
        id="projects"
        label="// Portfolio"
        title="Featured Projects"
        desc="A selection of projects I've built and contributed to"
      >
        <div className="projects-grid">
          {[
            {
              icon: '📱',
              title: 'Survey Field App',
              desc: 'A mobile-first distributed survey platform built with Flutter. Features offline-first sync, conflict resolution, and safe concurrent writes with a Node.js/Express backend.',
              tags: ['Flutter', 'Node.js', 'MySQL', 'SQLite', 'JWT'],
              lang: 'JavaScript',
              langClass: 'js',
              github: 'https://github.com/Abhisar-else/feild_survey_app'
            },
            {
              icon: '⚔️',
              title: 'IdleQuest RPG',
              desc: 'An idle RPG game with a .NET 8 backend. Features character progression, quest systems, and real-time game mechanics with a modern C# architecture.',
              tags: ['.NET 8', 'C#', 'Game Dev', 'REST API'],
              lang: 'C#',
              langClass: 'csharp',
              github: 'https://github.com/Abhisar-else/Idlequest',
              stars: 1
            },
            {
              icon: '📊',
              title: 'Job Market Analyzer',
              desc: 'A Python-based analytical tool that processes and visualizes job market data to identify trends, in-demand skills, and salary insights for job seekers.',
              tags: ['Python', 'Data Analysis', 'Pandas', 'Visualization'],
              lang: 'Python',
              langClass: 'python',
              github: 'https://github.com/Abhisar-else/Job_Market_Analyizer-'
            },
            {
              icon: '🚀',
              title: 'UptoSkills Project',
              desc: 'Web development project built during the UptoSkills internship. Full-stack web application with modern JavaScript and responsive design principles.',
              tags: ['JavaScript', 'HTML/CSS', 'Full-Stack', 'Responsive'],
              lang: 'JavaScript',
              langClass: 'js',
              github: 'https://github.com/Abhisar-else/uptoskills-project-'
            }
          ].map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${project.title} on GitHub`}>
                    <GitHubIcon />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Open ${project.title}`}>
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-lang">
                <span className={`lang-dot ${project.langClass}`} />
                <span className="lang-name">{project.lang}</span>
                {project.stars && (
                  <span className="lang-name" style={{ marginLeft: 'auto' }}>
                    ⭐ {project.stars}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ EDUCATION ═══════════════ */}
      <Section
        id="education"
        label="// Education"
        title="Academic Background"
        desc="Where I'm building my foundation in Computer Science"
      >
        <div className="education-card">
          <div className="education-icon">🎓</div>
          <h3 className="education-degree">Bachelor of Technology</h3>
          <div className="education-school">
            Symbiosis University of Applied Sciences
          </div>
          <div className="education-duration">2024 — 2028 (Expected)</div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Computer Science & Information Technology • IV Semester
          </p>
          <div className="education-details">
            <div className="edu-detail">
              <span className="edu-detail-icon">📍</span> Indore, MP
            </div>
            <div className="edu-detail">
              <span className="edu-detail-icon">🏅</span> IEEE Member
            </div>
            <div className="edu-detail">
              <span className="edu-detail-icon">🔬</span> KNIME Certified
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
      <Section
        id="certifications"
        label="// Certifications"
        title="Credentials & Achievements"
        desc="Certifications and recognitions I've earned along the way"
      >
        <div className="certs-grid">
          {[
            { icon: '🌍', title: 'The Global FinTech Ecosystem', org: 'Professional Certification' },
            { icon: '🏆', title: 'Spellbee Certificate — State Level', org: 'Competition Achievement' },
            { icon: '🐍', title: 'Python for Data Science & ML — Part 1', org: 'Essential Training' },
            { icon: '🔧', title: 'Low Code/No-Code Data Literacy with KNIME', org: 'Basic to Advanced' },
            { icon: '🔒', title: 'Cybersecurity & Data', org: 'Security Fundamentals' },
            { icon: '📊', title: 'KNIME Certified', org: 'Data Analytics Platform' }
          ].map((cert) => (
            <div key={cert.title} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-title">{cert.title}</div>
              <div className="cert-org">{cert.org}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <Section
        id="contact"
        label="// Get in Touch"
        title="Let's Work Together"
        desc="Open to internships, partnership opportunities, and collaborations"
      >
        <div className="contact-grid">
          <div className="contact-info">
            <h3>
              Let's create something{' '}
              <span className="gradient-text" style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                amazing
              </span>{' '}
              together.
            </h3>
            <p>
              I'm always excited to connect with fellow developers, designers, and innovators.
              Whether you have a project idea, internship opportunity, or just want to chat about tech — drop me a message!
            </p>

            <div className="contact-methods">
              <a href="mailto:abhisarsharma2006@gmail.com" className="contact-method">
                <span className="contact-method-icon">📧</span>
                <div>
                  <div className="contact-method-label">Email</div>
                  <div className="contact-method-value">abhisarsharma2006@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-method-icon">💼</span>
                <div>
                  <div className="contact-method-label">LinkedIn</div>
                  <div className="contact-method-value">Abhisar Sharma</div>
                </div>
              </a>

              <a href="https://github.com/Abhisar-else" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-method-icon">🐙</span>
                <div>
                  <div className="contact-method-label">GitHub</div>
                  <div className="contact-method-value">Abhisar-else</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks for reaching out! I\'ll get back to you soon.'); }}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-input" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-textarea" placeholder="Tell me about your project or opportunity..." required />
            </div>
            <button type="submit" className="form-submit">
              Send Message ✨
            </button>
          </form>
        </div>
      </Section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 <span>Abhisar Sharma</span>. Built with React & passion.
          </p>
          <div className="footer-links">
            <a href="https://github.com/Abhisar-else" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abhisar-sharma-670107321/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:abhisarsharma2006@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
