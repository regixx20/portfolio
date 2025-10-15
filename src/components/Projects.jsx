const projects = [
  {
    name: "Pulse Defender",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    link: "https://github.com/regixx20",
    description:
      "Plateforme de supervision de menaces cyber qui centralise les alertes de plusieurs sondeurs et déclenche des workflows d&apos;investigation.",
  },
  {
    name: "Agenda Connect",
    tech: ["React", "TypeScript", "Node.js", "Kafka"],
    link: "https://github.com/regixx20",
    description:
      "Application collaborative de prise de rendez-vous avec notifications temps réel et synchronisation multi-calendriers.",
  },
  {
    name: "AI Log Helper",
    tech: ["Python", "LangChain", "FastAPI", "OpenAI"],
    link: "https://github.com/regixx20",
    description:
      "Assistant IA qui résume des logs complexes et propose des pistes d&apos;investigation à partir de scénarios de cybersécurité.",
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
          <article key={project.name} className="projects__card">
            <div className="projects__card-header">
              <h3>{project.name}</h3>
              <a href={project.link} target="_blank" rel="noreferrer">
                Voir le code
              </a>
            </div>
            <p>{project.description}</p>
            <ul className="projects__tags">
              {project.tech.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
