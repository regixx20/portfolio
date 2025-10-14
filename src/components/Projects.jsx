export default function Projects() {
  const projects = [
    {
      name: "Jeu vidéo Pong 2D",
      tech: "Java EE, Spring, JPA, Spring Security",
      link: "https://github.com/regixx20",
      desc: "Jeu multijoueur avec gestion des scores et authentification.",
    },
    {
      name: "Plateforme de prise de rendez-vous",
      tech: "Java Spring, REST API, Swagger",
      link: "https://github.com/regixx20",
      desc: "Application web style Doodle avec authentification et notifications.",
    },
  ];

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6 text-center">🚀 Projets</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.tech}</p>
            <p className="text-gray-700 mb-3">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
