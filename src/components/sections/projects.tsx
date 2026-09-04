export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  /** Optional live/deployed URL. Rendered as a second link when present. */
  demo?: string;
};

/**
 * Add a new project by appending an object to this array — nothing else
 * in the codebase needs to change. The Projects section in
 * `app/page.tsx` renders directly from `projects`, in order.
 *
 * Fields:
 *   id          unique slug, used as the React key
 *   title       project name
 *   tagline     short one-line descriptor shown under the title
 *   description 1-3 sentences on what it does / how it's built
 *   tech        array of stack tags rendered as badges
 *   link        repo URL, or "" if there isn't a public one (hardware, etc.)
 *   linkLabel   text shown next to the link ("View on GitHub", "Hardware project — no repo"...)
 *   demo        optional — a live/deployed URL, rendered as a second link
 *
 * Everything below (except Smart Dustbin, which is hardware and has no repo)
 * was pulled from github.com/Abhisar-else's non-fork repositories and
 * verified against each repo's own README — not guessed from the name.
 */
export const projects: Project[] = [
  {
    id: "ai-interview-simulator",
    title: "AI Interview Simulator",
    tagline: "Full-stack adaptive mock-interview platform",
    description:
      "Parses an uploaded resume, then runs adaptive multi-turn interviews (technical, coding, HR) tailored to it — with tab-switch focus tracking, a voice mode, and radar-chart performance analytics. Built during the Positiveway Solutions internship.",
    tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Gemini AI", "JWT"],
    link: "https://github.com/Abhisar-else/ai-interview-assistant-postiveway-",
    linkLabel: "View on GitHub",
    demo: "https://ai-interview-assistant-postiveway.vercel.app",
  },
  {
    id: "dsa-visualizer",
    title: "DSA Visualizer",
    tagline: "Algorithm visualizer with a C++/WASM engine",
    description:
      "A browser-based sorting/search visualizer where the computation itself runs in compiled C++, recorded step-by-step into an animated timeline, with run metrics persisted to an embedded SQLite database.",
    tech: ["C++", "WebAssembly", "JavaScript", "SQLite"],
    link: "https://github.com/Abhisar-else/data-structure-algorithm-tracker-",
    linkLabel: "View on GitHub",
    demo: "https://data-structure-algorithm-tracker.vercel.app",
  },
  {
    id: "field-survey-app",
    title: "Field Survey App",
    tagline: "Production-ready distributed data-collection framework",
    description:
      'A mobile-first survey platform built with Flutter, solving field data\'s "ghost data" problem with offline-first local storage plus real-time cloud sync. Surveys share by QR code and converge into a live analytics dashboard.',
    tech: ["Flutter", "Firebase", "Node.js", "MySQL", "SQLite", "JWT"],
    link: "https://github.com/Abhisar-else/feild_survey_app",
    linkLabel: "View on GitHub",
  },
  {
    id: "idlequest",
    title: "IdleQuest",
    tagline: "Browser-based idle RPG, .NET 8 backend",
    description:
      "An idle RPG on a clean-architecture .NET 8 backend (Domain → Application → Infrastructure → API) with EF Core persistence, JWT auth, and a Redis-backed distributed cache that falls back to in-memory automatically.",
    tech: ["ASP.NET Core 8", "C#", "EF Core", "JWT", "Redis"],
    link: "https://github.com/Abhisar-else/Idlequest",
    linkLabel: "View on GitHub",
  },
  {
    id: "ai-whatsapp-assistant",
    title: "AI WhatsApp Executive Assistant",
    tagline: "AI support assistant over the WhatsApp Business API",
    description:
      "A FastAPI assistant that answers questions from a knowledge base, schedules meetings through a slot-filling conversation flow, and gives admins a full dashboard — with an LLM fallback chain across Gemini, Groq, and OpenRouter. Built during the Positiveway Solutions internship.",
    tech: ["Python", "FastAPI", "SQLite", "Meta Cloud API", "Gemini"],
    link: "https://github.com/Abhisar-else/ai-assistent-whatsapp",
    linkLabel: "View on GitHub",
  },
  {
    id: "ai-lead-discovery",
    title: "AI Business Lead Discovery",
    tagline: "Digital-presence gap analysis pipeline",
    description:
      "An automated pipeline that scrapes business listings, audits their web presence, and scores lead potential with Gemini — surfaced through a Streamlit dashboard and synced automatically to Google Sheets. Built during the Positiveway Solutions internship.",
    tech: ["Python", "Streamlit", "Gemini AI", "SerpAPI", "Google Sheets API"],
    link: "https://github.com/Abhisar-else/AI-Based-Business-Lead-Discovery-",
    linkLabel: "View on GitHub",
  },
  {
    id: "water-body-data-art",
    title: "Water Body — Earth Systems Data Art",
    tagline: "Interactive Earth-science data visualization",
    description:
      "An 8-slide Streamlit dashboard visualizing open Earth-science datasets — NASA EPIC imagery, global river networks, ocean currents, sea-ice cycles, and live satellite tracking — inspired by the Water Body art installation.",
    tech: ["Python", "Streamlit", "GDAL", "NASA & Copernicus APIs"],
    link: "https://github.com/Abhisar-else/space-project",
    linkLabel: "View on GitHub",
  },
  {
    id: "job-market-analyzer",
    title: "Job Market Analyzer",
    tagline: "Job-listing data analysis tool",
    description:
      "A Python tool for processing job-listing data to surface patterns in demand and requirements across roles.",
    tech: ["Python", "Data Analysis"],
    link: "https://github.com/Abhisar-else/Job_Market_Analyizer-",
    linkLabel: "View on GitHub",
  },
  {
    id: "uptoskills-project",
    title: "UptoSkills Project",
    tagline: "Internship web application",
    description:
      "A full-stack web app built during the MERN Stack Developer internship at UptoSkills.",
    tech: ["JavaScript", "React", "REST API"],
    link: "https://github.com/Abhisar-else/uptoskills-project-",
    linkLabel: "View on GitHub",
  },
  {
    id: "smart-dustbin",
    title: "Smart Dustbin",
    tagline: "IoT-based waste management system",
    description:
      "An automated hardware build using ultrasonic distance sensing to trigger a servo-controlled lid, cutting manual contact and easing collection routes.",
    tech: ["Arduino Uno R3", "Ultrasonic Sensor", "Servo Motor", "C++"],
    link: "",
    linkLabel: "Hardware project — no repo",
  },
];
