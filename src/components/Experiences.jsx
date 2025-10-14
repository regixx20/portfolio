export default function Experiences() {
  const experiences = [
    {
      title: "Développeur Back-End Alternant – Gatewatcher",
      date: "Oct. 2024 – Sep. 2025",
      description:
        "Développement Python et intégration d’API dans des environnements CI/CD. Conception d’agents IA avec LangChain et microservices Docker. Méthodologie Agile (Scrum).",
    },
    {
      title: "Développeur Logiciel Stagiaire – Laboratoire LIS, Marseille",
      date: "Avr. 2024 – Juil. 2024",
      description:
        "Mise en place de la conteneurisation avec Docker & Kubernetes. Développement de modules Spring Boot & React, intégration GitLab CI/CD, SonarQube et Postman.",
    },
  ];

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6 text-center">💼 Expériences Professionnelles</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="p-4 border rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.date}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
