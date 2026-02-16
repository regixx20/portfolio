const experiences = [
  {
    title: "Développeur Backend Python (CDD)",
    company: "Gatewatcher",
    date: "Sep. 2024 – Sep. 2025",
    description:
      "Chez Gatewatcher (cybersécurité, Paris La Défense), j’ai participé à la conception et au développement d’agents IA (LangChain/LangGraph) pour automatiser la remédiation d’incidents, en méthodologie Agile (SCRUM).",
    achievements: [
      "Conception et développement d’agents IA avec LangChain / LangGraph pour la remédiation d’incidents de cybersécurité.",
      "Intégration et orchestration d’APIs avec FastAPI dans un environnement CI/CD GitLab.",
      "Développement de microservices conteneurisés avec Docker.",
      "Collaboration étroite avec les équipes cyber pour adapter les agents IA aux besoins terrain.",
    ],
    roi: "Contribution à l’automatisation de la réponse aux incidents, réduisant le temps de réaction moyen d’environ 65% grâce à l’utilisation d’agents IA.",
  },
  {
    title: "Développeur Full Stack Java/Angular (Alternance)",
    company: "Capgemini",
    date: "Sep. 2021 – Août 2024",
    description:
      "Au sein de Capgemini (Marseille), j’ai contribué à plusieurs missions (Crédit Agricole, SNCF) autour du développement back-end Spring et front-end Angular, avec une forte culture CI/CD et qualité logicielle.",
    achievements: [
      "Mission Crédit Agricole (1 an) : développement d’une application de gestion documentaire.",
      "Développement d’API REST en Java Spring Boot avec persistance SQL.",
      "Mise en place de notifications automatiques en cas de non-conformité via Spring Batch.",
      "Pipelines CI/CD (tests, build, déploiement) et contrôle qualité via Sonar.",
      "Mission SNCF (2 ans) : refonte d’un outil de vente de billets en gare.",
      "Back-end Spring Boot (API REST) : conception de fonctionnalités et gestion d’erreurs.",
      "Persistance PostgreSQL : requêtes, jointures, gestion des données métier.",
      "Livraison continue : Jenkins, Git, tests unitaires, documentation technique.",
    ],
    roi: "Automatisation des relances de non-conformité : gain estimé de 10 à 20 heures par mois.",
  },
  {
    title: "Développeur Logiciel Java (Stage)",
    company: "Laboratoire d’Informatique et Systèmes (LIS)",
    date: "Avr. 2021 – Juil. 2021",
    description:
      "Stage au LIS (Marseille) sur une application visant à automatiser des tâches chronophages, en méthodologie Agile (SCRUM).",
    achievements: [
      "Développement d’une application Java Spring Boot pour automatiser des tâches chronophages.",
      "Conception de modules back-end Java (Spring) exposant des APIs REST.",
      "Développement de l’interface utilisateur avec AngularJS.",
      "Conteneurisation et déploiement via Docker, documentation d’API avec Swagger.",
      "Automatisation de traitements de données (prétraitement datasets, génération de graphiques).",
    ],
    roi: "Création d’une plateforme d’automatisation d’actions chronophages de traitement de données.",
  },
];

export default function Experiences() {
  return (
    <div className="timeline">
      <h2 id="experiences" className="section-title">Expériences professionnelles</h2>
      <p className="section-subtitle">
        Chaque mission a renforcé ma capacité à concevoir des services fiables, documentés et observables.
      </p>

      <div className="timeline__items">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.date}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden />
            <div className="timeline__content">
              <p className="timeline__date">{experience.date}</p>

              <h3>
                {experience.title} · <span>{experience.company}</span>
              </h3>

              <p>{experience.description}</p>

              <ul className="timeline__achievements">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              {experience.roi && <p className="timeline__roi"><strong>ROI :</strong> {experience.roi}</p>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
