export default function Navbar({ activeSection = "profil" }) {
  return (
    <header className="navbar">
      <div>
        <p className="navbar__brand">Régix Mededji</p>
        <p className="navbar__subtitle">Ingénieur logiciel & créateur de solutions cloud-native</p>
      </div>
      <nav aria-label="Navigation principale" className="navbar__links">
        <a
          className={activeSection === "profil" ? "is-active" : undefined}
          aria-current={activeSection === "profil" ? "true" : undefined}
          href="#profil"
        >
          Profil
        </a>
        <a
          className={activeSection === "skills" ? "is-active" : undefined}
          aria-current={activeSection === "skills" ? "true" : undefined}
          href="#skills"
        >
          Compétences
        </a>
        <a
          className={activeSection === "experiences" ? "is-active" : undefined}
          aria-current={activeSection === "experiences" ? "true" : undefined}
          href="#experiences"
        >
          Expériences
        </a>
        <a
          className={activeSection === "projets" ? "is-active" : undefined}
          aria-current={activeSection === "projets" ? "true" : undefined}
          href="#projets"
        >
          Projets
        </a>
        <a className="navbar__cta" href="#contact">
          Travaillons ensemble
        </a>
      </nav>
    </header>
  );
}
