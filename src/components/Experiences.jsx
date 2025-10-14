const experiences = [
  {
    title: "Développeur Back-End Alternant",
    company: "Gatewatcher",
    date: "Oct. 2024 – Sep. 2025",
    achievements: [
      "Conception d&apos;agents IA pour l&apos;analyse de menaces avec LangChain et intégration aux produits maison",
      "Mise à disposition de microservices Python et Java packagés via Docker, Helm et GitLab CI/CD",
      "Collaboration étroite avec les équipes produit pour cadrer et livrer des fonctionnalités en sprints Scrum",
    ],
  },
  {
    title: "Développeur Logiciel Stagiaire",
    company: "Laboratoire LIS – Marseille",
    date: "Avr. 2024 – Juil. 2024",
    achievements: [
      "Industrialisation d&apos;une plateforme de recherche en déployant Docker, Kubernetes et un monitoring centralisé",
      "Développement de modules Spring Boot sécurisés et d&apos;interfaces React pour piloter l&apos;analyse scientifique",
      "Mise en place d&apos;un pipeline GitLab CI/CD avec automatisation des tests, SonarQube et documentation API",
    ],
  },
];

export default function Experiences() {
  return (
    <div className="timeline">
      <h2 className="section-title">Expériences professionnelles</h2>
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
