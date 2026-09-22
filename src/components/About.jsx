import { useScrollReveal } from "../hooks";

const skills = [
  "Java / Spring Boot",
  "Python / FastAPI",
  "LangChain / LangGraph",
  "React",
  "Docker / Kubernetes",
  "PostgreSQL",
  "CI/CD (GitLab, Jenkins)",
  "RAG & LLMs",
];

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="about reveal" ref={revealRef}>
      <h2 className="numbered-heading">À propos</h2>

      <div className="about__inner">
        <div>
          <p>
            Bonjour ! Je m&apos;appelle Régix et je conçois des services
            backend qui tiennent la charge. Mon intérêt pour le développement
            s&apos;est construit autour d&apos;une idée simple : une bonne
            application se juge autant à ce qu&apos;elle fait qu&apos;à la
            façon dont elle se comporte quand tout va mal.
          </p>

          <p>
            J&apos;ai eu la chance de travailler dans des contextes très
            différents — un{" "}
            <a className="inline-link" href="#jobs">
              laboratoire de recherche
            </a>
            , une{" "}
            <a className="inline-link" href="#jobs">
              ESN sur des missions bancaires et ferroviaires
            </a>
            , et plus récemment une{" "}
            <a className="inline-link" href="#jobs">
              entreprise de cybersécurité
            </a>{" "}
            où j&apos;ai développé des agents IA pour automatiser la
            remédiation d&apos;incidents.
          </p>

          <p>
            Ce qui m&apos;intéresse aujourd&apos;hui : les architectures
            distribuées, l&apos;automatisation intelligente et tout ce qui rend
            un système observable et documenté plutôt que magique.
          </p>

          <p>Voici les technologies avec lesquelles je travaille en ce moment :</p>

          <ul className="about__skills">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about__pic">
          <div className="about__pic-wrapper" tabIndex={0}>
            <img src="/photo_regix.jpg" alt="Portrait de Régix Mededji" />
          </div>
        </div>
      </div>
    </section>
  );
}
