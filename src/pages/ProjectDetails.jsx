import { useNavigate, useParams } from "react-router-dom";

import { projects } from "../data/projects";

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const isUpdating = Boolean(project?.status);
  const statusLabel = project?.statusLabel ?? "Mise à jour à venir";

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail__container">
          <p className="project-detail__empty">Projet introuvable.</p>
          <button
            type="button"
            className="project-detail__back"
            onClick={() => navigate(-1)}
          >
            Retour
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail__container">
        <button
          type="button"
          className="project-detail__back"
          onClick={() => navigate(-1)}
        >
          ← Retour aux projets
        </button>
        <div className={`project-detail__card${isUpdating ? " project-detail__card--updating" : ""}`}>
          <div className="project-detail__content">
            <span className="project-detail__eyebrow">Projet</span>
            <h1 className="project-detail__title">{project.name}</h1>
            {isUpdating && <span className="project-detail__status">{statusLabel}</span>}
            <p className="project-detail__description">{project.description}</p>
            <ul className="project-detail__tech">
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {isUpdating ? (
              <p className="project-detail__status-note">
                Ce projet est actuellement en cours de mise à jour. Revenez bientôt pour découvrir les dernières améliorations.
              </p>
            ) : (
              <div className="project-detail__actions">
                <a
                  href={project.liveUrl}
                  className="project-detail__cta project-detail__cta--primary"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Accéder au produit
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="project-detail__cta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le code source
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="project-detail__media">
            {project.demoVideo ? (
              <div className="project-detail__video" role="group" aria-label={`Démo vidéo de ${project.name}`}>
                <iframe
                  src={project.demoVideo}
                  title={`Démo ${project.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="project-detail__media-placeholder" aria-hidden="true">
                Démonstration en cours de préparation
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}