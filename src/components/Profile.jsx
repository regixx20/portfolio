export default function Profile() {
  return (
    <div id ="profil" className="hero">
      <img className="hero__avatar" src="/photo_regix.jpg" alt="Photo de Régix Mededji" aria-hidden="true"/>
      <div className="hero__content">
        <p className="hero__eyebrow">Software engineer</p>
        <h1>Je construis des applications sécurisées qui allient performance et expérience utilisateur.</h1>
        <p className="hero__description">
          Titulaire d'un master en Ingénierie du Développement Logiciel et passionné par l&apos;écosystème Java, Python et Javascript, j&apos;aime transformer des problèmes
          complexes en produits concrets. Du backend Spring Boot Java ou Python aux interfaces React ou Angular, j&apos;orchestre des
          solutions complètes en m&apos;appuyant sur des pratiques DevOps modernes. J'aime également exploiter l'IA générative pour
          enrichir l'expérience des utilisateurs grâce à une approche agentique.
        </p>
        <br />
      
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
