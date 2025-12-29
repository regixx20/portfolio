import { Github } from "lucide-react";

export default function Profile() {
  return (
    <div className="hero hero--full">
      <div className="hero__layout">
        <img
          className="hero__avatar"
          src="/photo_regix.jpg"
          alt="Photo de Régix Mededji"
          aria-hidden="true"
        />
        <div className="hero__content">
          <p className="hero__eyebrow">Software engineer</p>
          <h1>Je construis des applications fiables et élégantes.</h1>
          <p className="hero__description">
            Ingénieur logiciel fullstack, je conçois des backends robustes et des interfaces claires en m&apos;appuyant sur des
            pratiques modernes de sécurité, de tests et de déploiement.
          </p>

          <div className="hero__actions">
            <a className="button" href="#projets">
              Découvrir mes projets
            </a>
            <a
              className="button button--github flex items-center gap-2"
              href="https://github.com/regixx20"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
