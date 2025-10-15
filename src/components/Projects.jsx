import { Link } from "react-router-dom";

const projects = [
  {
    id: "pong2d",
    name: "Pong 2D",
    tech: ["Java", "Swing"],
    link: "https://github.com/regixx20",
    description:
      "Jeu vidéo Pong 2D composé de trois moteurs : physique, graphique et sonore.",
  },
  {
    id: "agenda-connect",
    name: "Agenda Connect",
    tech: ["React", "TypeScript", "Node.js", "Kafka"],
    link: "https://github.com/regixx20",
    description:
      "Application collaborative de prise de rendez-vous avec notifications temps réel.",
  },
  {
    id: "ai-log-helper",
    name: "AI Log Helper",
    tech: ["Python", "LangChain", "FastAPI", "OpenAI"],
    link: "https://github.com/regixx20",
    description:
      "Assistant IA qui résume des logs complexes et propose des pistes d'investigation.",
  },
];

export default function Projects() {
  return (
    <div id="projets" className="projects">
      <h2 className="section-title">Projets sélectionnés</h2>
      <p className="section-subtitle">
        Des applications concrètes qui illustrent ma capacité à passer de l&apos;idée au produit opérationnel.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            className="projects__card"
            to={`/projets/${project.id}`} // <-- redirection interne
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="projects__card-header">
              <h3>{project.name}</h3>
            </div>
            <p>{project.description}</p>
            <ul className="projects__tags">
              {project.tech.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}