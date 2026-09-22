import { useState, useRef, useEffect } from "react";
import { useScrollReveal } from "../hooks";

const jobs = [
  {
    company: "Gatewatcher",
    url: "https://www.gatewatcher.com",
    title: "Développeur Backend Python",
    range: "Sep. 2024 – Sep. 2025",
    achievements: [
      "Conception et développement d’agents IA avec LangChain / LangGraph pour la remédiation d’incidents de cybersécurité.",
      "Intégration et orchestration d’APIs avec FastAPI dans un environnement CI/CD GitLab.",
      "Développement de microservices conteneurisés avec Docker.",
      "Collaboration étroite avec les équipes cyber pour adapter les agents IA aux besoins terrain.",
    ],
    roi: "Automatisation de la réponse aux incidents, réduisant le temps de réaction moyen d’environ 65%.",
  },
  {
    company: "Capgemini",
    url: "https://www.capgemini.com",
    title: "Développeur Full Stack Java/Angular",
    range: "Sep. 2021 – Août 2024",
    achievements: [
      "Mission Crédit Agricole : développement d’une application de gestion documentaire.",
      "Développement d’API REST en Java Spring Boot avec persistance SQL.",
      "Mise en place de notifications automatiques en cas de non-conformité via Spring Batch.",
      "Mission SNCF : refonte d’un outil de vente de billets en gare (Spring Boot, PostgreSQL).",
      "Livraison continue : Jenkins, Git, tests unitaires, contrôle qualité via Sonar.",
    ],
    roi: "Automatisation des relances de non-conformité : gain estimé de 10 à 20 heures par mois.",
  },
  {
    company: "LIS",
    url: "https://www.lis-lab.fr",
    title: "Développeur Logiciel Java",
    range: "Avr. 2021 – Juil. 2021",
    achievements: [
      "Développement d’une application Java Spring Boot pour automatiser des tâches chronophages.",
      "Conception de modules back-end Java exposant des APIs REST.",
      "Développement de l’interface utilisateur avec AngularJS.",
      "Conteneurisation via Docker, documentation d’API avec Swagger.",
      "Automatisation de traitements de données (prétraitement de datasets, génération de graphiques).",
    ],
    roi: "Création d’une plateforme d’automatisation d’actions chronophages de traitement de données.",
  },
];

export default function Jobs() {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealRef = useScrollReveal();

  useEffect(() => {
    if (tabFocus === null) {
      return;
    }
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus]);

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        setTabFocus((current) => (current === null ? activeTabId : current) - 1);
        break;
      case "ArrowDown":
        event.preventDefault();
        setTabFocus((current) => (current === null ? activeTabId : current) + 1);
        break;
      default:
        break;
    }
  };

  return (
    <section id="jobs" className="jobs reveal" ref={revealRef}>
      <h2 className="numbered-heading">Mon parcours</h2>

      <div className="jobs__inner">
        <div
          className="jobs__tablist"
          role="tablist"
          aria-label="Expériences professionnelles"
          onKeyDown={onKeyDown}
        >
          {jobs.map((job, i) => (
            <button
              key={job.company}
              type="button"
              className={`jobs__tab ${activeTabId === i ? "jobs__tab--active" : ""}`}
              onClick={() => setActiveTabId(i)}
              ref={(el) => (tabs.current[i] = el)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div
            className="jobs__highlight"
            style={{ "--active-tab": activeTabId }}
          />
        </div>

        <div className="jobs__panels">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className="jobs__panel"
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a
                    href={job.url}
                    className="inline-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.company}
                  </a>
                </span>
              </h3>

              <p className="range">{job.range}</p>

              <ul className="fancy-list">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              {job.roi && (
                <p className="roi">
                  <strong>IMPACT</strong>
                  <br />
                  {job.roi}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
