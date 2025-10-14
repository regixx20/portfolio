const skills = [
  {
    category: "Langages & Frameworks",
    items: ["Java", "Spring Boot", "Python", "React", "Node.js"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "GitLab", "AWS"],
  },
  {
    category: "Data & IA",
    items: ["LangChain", "PostgreSQL", "Kafka", "RabbitMQ", "TensorFlow"],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="section-title">Compétences clés</h2>
      <p className="section-subtitle">
        Un aperçu des technologies et méthodologies avec lesquelles je conçois des
        produits robustes et évolutifs.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.category} className="skills-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
