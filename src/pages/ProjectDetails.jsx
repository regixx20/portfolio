import { useParams } from "react-router-dom";

const projects = [
  {
    id: "pong2d",
    name: "Pong 2D",
    tech: ["Java", "Swing"],
    description: "Jeu vidéo Pong 2D composé de trois moteurs : physique, graphique et sonore.",
    link: "https://github.com/regixx20",
  },
  {
    id: "agenda-connect",
    name: "Agenda Connect",
    tech: ["React", "TypeScript", "Node.js", "Kafka"],
    description: "Application collaborative de prise de rendez-vous avec notifications temps réel.",
    link: "https://github.com/regixx20",
  },
  {
    id: "ai-log-helper",
    name: "AI Log Helper",
    tech: ["Python", "LangChain", "FastAPI", "OpenAI"],
    description: "Assistant IA qui résume des logs complexes et propose des pistes d'investigation.",
    link: "https://github.com/regixx20",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Projet introuvable.</div>;

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noreferrer">
        Voir le code sur GitHub
      </a>
    </div>
  );
}