const highlights = [
  "Architecture de microservices robustes et scalables",
  "Industrialisation des livraisons avec des pipelines CI/CD fiables",
  "Expérimentations IA : agents LangChain, automatisation et veille technologique",
];

export default function Profile() {
  return (
    <div className="hero">
      <div className="hero__avatar" aria-hidden>RM</div>
      <div className="hero__content">
        <p className="hero__eyebrow">Alternant Ingénieur Logiciel chez Gatewatcher</p>
        <h1>Je construis des plateformes sécurisées qui allient performance et expérience utilisateur.</h1>
        <p className="hero__description">
          Passionné par l&apos;écosystème Java et les architectures cloud-native, j&apos;aime transformer des problèmes
          complexes en produits concrets. Du backend Spring Boot aux interfaces React, j&apos;orchestre des
          solutions complètes en m&apos;appuyant sur des pratiques DevOps modernes.
        </p>
        <ul className="hero__highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero__actions">
          <a className="button" href="#projets">
            Découvrir mes projets
          </a>
          <a className="button button--ghost" href="https://www.linkedin.com/in/régix-mededji" target="_blank" rel="noreferrer">
            Connectons-nous
          </a>
        </div>
      </div>
    </div>
  );
}
