import { Link } from "react-router-dom";

import { projects } from "../data/projects";

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
            <br />
            <img id= "pong2d" src={project.image} alt={project.name} />
            <br />
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