import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks";

function FeaturedItem({ project, index }) {
  const revealRef = useScrollReveal(index * 100);
  const isUpdating = Boolean(project.status);
  const cover = project.demoImage ?? project.image;
  const detailUrl = `/projets/${project.id}`;

  const title = isUpdating ? (
    <span>{project.name}</span>
  ) : (
    <Link to={detailUrl}>{project.name}</Link>
  );

  return (
    <li className="featured__item reveal" ref={revealRef}>
      <div className="featured__content">
        <p className="featured__overline">Projet</p>

        <h3 className="featured__title">
          {title}
          {isUpdating && (
            <span className="featured__badge">
              {project.statusLabel ?? "Mise à jour à venir"}
            </span>
          )}
        </h3>

        <div className="featured__description">
          <p>{project.simpleDescription}</p>
        </div>

        <ul className="featured__tech">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="featured__links">
          {!isUpdating && (
            <Link to={detailUrl} className="small-button cta">
              En savoir plus
            </Link>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              aria-label={`Code source de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              aria-label={`Démo de ${project.name}`}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="featured__image">
        {cover ? (
          <a
            href={project.liveUrl ?? project.repoUrl ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`Aperçu de ${project.name}`}
          >
            <img src={cover} alt={`Aperçu du projet ${project.name}`} loading="lazy" />
          </a>
        ) : (
          <div className="featured__placeholder">Aperçu à venir</div>
        )}
      </div>
    </li>
  );
}

export default function Featured() {
  const titleRef = useScrollReveal();

  return (
    <section id="projects">
      <h2 className="numbered-heading reveal" ref={titleRef}>
        Ce que j&apos;ai construit
      </h2>

      <ul className="featured__grid">
        {projects.map((project, i) => (
          <FeaturedItem key={project.id} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
}
