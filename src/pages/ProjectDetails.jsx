import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Github, ExternalLink, Download, Play } from "lucide-react";

import { projects } from "../data/projects";
import PlayModal from "../components/PlayModal";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [playing, setPlaying] = useState(false);

  if (!project) {
    return (
      <section className="project-detail">
        <h1 className="project-detail__title">Projet introuvable</h1>
        <p className="project-detail__description">
          Ce projet n&apos;existe pas ou a été déplacé.
        </p>
        <Link to="/" className="big-button">
          Retour à l&apos;accueil
        </Link>
      </section>
    );
  }

  const isUpdating = Boolean(project.status);
  const isDownload = project.liveUrl?.startsWith("/");
  const isVideoFile = project.demoVideo?.endsWith(".mp4");

  return (
    <section className="project-detail">
      <div className="breadcrumb">
        <Link to="/#projects" className="inline-link">
          &larr; Tous les projets
        </Link>
      </div>

      <p className="overline">Projet{project.year && ` · ${project.year}`}</p>
      <h1 className="project-detail__title">{project.name}</h1>

      {isUpdating && (
        <span className="featured__badge">
          {project.statusLabel ?? "Mise à jour à venir"}
        </span>
      )}

      <ul className="project-detail__tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p className="project-detail__description">{project.description}</p>

      {isUpdating ? (
        <p className="subtitle">
          Ce projet est en cours de mise à jour. Revenez bientôt pour découvrir
          les dernières améliorations.
        </p>
      ) : (
        <div className="project-detail__links">
          {project.playable && (
            <button type="button" className="big-button" onClick={() => setPlaying(true)}>
              <Play size={16} style={{ verticalAlign: "-2px", marginRight: 8, width: 16 }} />
              Jouer dans le navigateur
            </button>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="big-button"
              target="_blank"
              rel="noreferrer"
              {...(isDownload ? { download: true } : {})}
            >
              {isDownload ? (
                <Download size={16} style={{ verticalAlign: "-2px", marginRight: 8, width: 16 }} />
              ) : (
                <ExternalLink size={16} style={{ verticalAlign: "-2px", marginRight: 8, width: 16 }} />
              )}
              {isDownload ? "Télécharger" : "Voir en ligne"}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="big-button"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} style={{ verticalAlign: "-2px", marginRight: 8, width: 16 }} />
              Code source
            </a>
          )}
        </div>
      )}

      {project.demoVideo && (
        <div className="project-detail__media">
          {isVideoFile ? (
            <video
              controls
              preload="metadata"
              playsInline
              poster={project.demoImage}
              aria-label={`Démo vidéo de ${project.name}`}
            >
              <source src={project.demoVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          ) : (
            <iframe
              src={project.demoVideo}
              title={`Démo ${project.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      )}

      {project.playable && (
        <PlayModal open={playing} onClose={() => setPlaying(false)} title={`Jouer à ${project.name}`} />
      )}
    </section>
  );
}
