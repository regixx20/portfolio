import { Github } from "lucide-react";
export default function Profile() {
  return (
    <div id ="profil" className="hero">
      <img className="hero__avatar" src="/photo_regix.jpg" alt="Photo de Régix Mededji" aria-hidden="true"/>
      <div className="hero__content">
        <p className="hero__eyebrow">Software engineer</p>
        <h1>Je développe des applications backend sécurisées et performantes.</h1>
        <p className="hero__description">
          Ingénieur logiciel backend Java Python. Je conçois des APIs et services robustes, orientés performance, sécurité et qualité logicielle.
        </p>
        <br />
      
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
  );
}
