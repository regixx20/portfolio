const experiences = [
  {
    title: "Développeur Back-End Alternant",
    company: "Gatewatcher",
    date: "Oct. 2024 – Sep. 2025",
    description: "Au cours de mon année en tant que développeur back-end Python chez Gatewatcher, une entreprise de cybersécurité à Paris, La Défense, j'ai pu participer au développement de solutions de remédiation à des incidents de cybersécurité en utilisation des IA agentiques.",
    achievements: [
      "Développement Python et intégration API avec FastAPI dans des environnements CI/CD.",
      "Conception d’agents IA avec LangChain et LangGraph.",
      "Développement de microservices conteneurisés avec Docker.",
    ],
  },
  {
    title: "Développeur Web Stagiaire",
    company: "SEMWEE",
    date: "Avr. 2022 – Jun. 2022",
    achievements: [
      "Optimisation du site semwee.app.",
      "Implémentation de caching serveur et correction de bugs front-end/back-end.",
      "Environnement de développement sous Linux, méthodes Agiles, outils de versioning.",
    ],
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
          <article key={experience.title} className="timeline__item">
            <div className="timeline__marker" aria-hidden />
            <div className="timeline__content">
              <p className="timeline__date">{experience.date}</p>
              <h3>
                {experience.title} · <span>{experience.company}</span>
              </h3>
              {experience.description}
              <ul>
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
