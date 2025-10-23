import { Link } from "react-router-dom";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div id="projets" className="projects">
      <h2 className="section-title">Projets réalisés</h2>
      <p className="section-subtitle">
        Des applications concrètes qui illustrent ma capacité à passer de l&apos;idée au produit opérationnel.
      </p>
      <div className="projects__grid">
        {projects.map((project) => {
          const isUpdating = Boolean(project.status);
          const cardClassName = `projects__card${isUpdating ? " projects__card--updating" : ""}`;
          const interactiveClassName = `${cardClassName} projects__card--interactive`;
          const cardAriaLabel = isUpdating
            ? `${project.name} — ${project.statusLabel ?? "Mise à jour à venir"}`
            : project.name;
          const content = (
            <>
              <div className="projects__card-header">
                <h3>{project.name}</h3>
                {isUpdating && (
                  <span className="projects__status">{project.statusLabel ?? "Mise à jour à venir"}</span>
                )}
              </div>
              {project.image ? (
                <div className="projects__thumbnail">
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="projects__thumbnail projects__thumbnail--placeholder"
                  aria-hidden="true"
                >
                  Aperçu en cours
                </div>
              )}
              <p className="projects__description">{project.simpleDescription}</p>
              <ul className="projects__tags">
                {project.tech.map((stack) => (
                  <li key={stack}>{stack}</li>
                ))}
              </ul>
            </>
          );

          return isUpdating ? (
            <article
              key={project.id}
              className={cardClassName}
              aria-disabled="true"
              aria-label={cardAriaLabel}
            >
              {content}
            </article>
          ) : (
            <Link
              key={project.id}
              className={interactiveClassName}
              to={`/projets/${project.id}`}
              aria-label={cardAriaLabel}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}