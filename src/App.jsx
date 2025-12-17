import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import "./App.css";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Coder",
  "Aayush Bharti",
];

const projects = [
  {
    id: "razorpay",
    title: "Razorpay Clone",
    description:
      "A responsive recreation of Razorpay's marketing site with smooth layouts and interactive calls to action.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "Vercel"],
    live: "https://aayushbharti-razorpay.vercel.app/",
    repo: "https://github.com/AayushBharti/Razorpay-clone",
  },
  {
    id: "discord",
    title: "Discord Clone",
    description:
      "Frontend clone of Discord highlighting the layout, typography, and hover states of the original experience.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "Vercel"],
    live: "https://aayushbharti-discord.vercel.app/",
    repo: "https://github.com/AayushBharti/Discord-clone",
  },
  {
    id: "password",
    title: "Password Generator",
    description: "A utility web app that crafts strong, customizable passwords on demand.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://aayushbharti-password-generator.vercel.app/",
    repo: "https://github.com/AayushBharti/Password-Generator",
  },
  {
    id: "granit",
    title: "Granit",
    description: "Concept site for an architectural studio, designed for clean presentation and simple browsing.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    live: "#",
    repo: "#",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Redux",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "Express",
  "Git",
  "Kubernetes",
  "GraphQL",
  "MongoDB",
  "Bash",
  "Chart.js",
  "Vercel",
  "Docker",
  "GitHub",
];

function useTypedText(words) {
  const memoWords = useMemo(() => words, [words]);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = memoWords[index];

    if (!isDeleting && display === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && display === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % memoWords.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setDisplay((prev) => {
        const nextLength = isDeleting ? prev.length - 1 : prev.length + 1;
        return currentWord.slice(0, Math.max(0, nextLength));
      });
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [display, index, isDeleting, memoWords]);

  return display;
}

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        <div className="logo-mark">AB</div>
        <div className="logo-text">
          <span className="logo-name">Aayush Bharti</span>
          <span className="logo-caption">Portfolio</span>
        </div>
      </a>

      <div className="nav-items">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <a href="https://github.com/AayushBharti" target="_blank" rel="noreferrer">
          <Github size={18} />
        </a>
        <a
          href="https://in.linkedin.com/in/iaayushbharti"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
        </a>
        <a href="https://twitter.com/iAayushBharti" target="_blank" rel="noreferrer">
          <Twitter size={18} />
        </a>
        <a className="pill" href="#contact">
          Hire Me
          <ArrowUpRight size={16} />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const typedText = useTypedText(roles);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-left">
        <p className="hero-eyebrow">Hey there 😊</p>
        <h1>
          I am &lt;<span className="role">{typedText}</span>/&gt;
        </h1>
        <p className="hero-description">
          I&apos;m a software developer and this is my portfolio. Explore my journey, projects, and the
          stack I love working with.
        </p>
        <div className="hero-actions">
          <a
            className="primary-btn"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iaayushbharti@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Hire Aayush
          </a>
          <a className="ghost-btn" href="#projects">
            View Work <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="floating-card">
          <div className="floating-front" />
          <div className="floating-back">
            <p className="floating-title">AAYUSH BHARTI</p>
          </div>
        </div>
      </div>

      <p className="hero-watermark" aria-hidden="true">
        Aayush Bharti
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2 className="title">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-overlay" aria-hidden="true" />
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a className="pill" href={project.live} target="_blank" rel="noreferrer">
                  Live <ExternalLink size={16} />
                </a>
                <a className="icon-btn" href={project.repo} target="_blank" rel="noreferrer">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="skills-wrapper">
        <div className="skills-text">
          <h2 className="title gradient">Me and My Tech Stack</h2>
          <div className="skills-copy">
            <p>
              Hi Everyone! I&apos;m Aayush Bharti, currently pursuing Computer Science Engineering. I love building
              authentic, useful products and bringing ideas to life.
            </p>
            <p>
              My toolkit spans from frontend craft to backend foundations, letting me move quickly across the stack and
              ship polished experiences.
            </p>
            <p>
              Collaboration, curiosity, and solving complex problems keep me motivated every single day.
            </p>
          </div>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
          <div className="skills-visual" aria-hidden="true" />
        </div>
      </div>
      <p className="skills-watermark" aria-hidden="true">
        Skills
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-header">
        <p>Let&apos;s</p>
        <h3>Connect!</h3>
      </div>
      <div className="contact-grid">
        <div className="contact-visual" aria-hidden="true" />
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button type="submit" className="send-btn">
            <span className="icon-wrap">
              <Send size={18} />
            </span>
            <span>Send</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Aayush Bharti</h2>
        <p>Thanks for visiting ❤️</p>
        <div className="footer-links">
          <a href="https://github.com/AayushBharti" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href="https://in.linkedin.com/in/iaayushbharti" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com/iAayushBharti" target="_blank" rel="noreferrer">
            <Twitter size={18} />
          </a>
          <a href="mailto:iaayushbharti@gmail.com" target="_blank" rel="noreferrer">
            <Mail size={18} />
          </a>
        </div>
        <div className="footer-quote">
          <span className="border" aria-hidden="true" />
          <p>stay hungry, stay foolish</p>
          <span className="border" aria-hidden="true" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Aayush Bharti. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="page">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
