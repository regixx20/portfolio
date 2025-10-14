export default function Navbar({ activeSection = "profil" }) {
  return (
    <header className="navbar">
      <div>
        <p className="navbar__brand">Régix Mededji</p>
        <p className="navbar__subtitle">Ingénieur logiciel & créateur de solutions cloud-native</p>
      </div>
      <nav aria-label="Navigation principale" className="navbar__links">
        <a href="#profil">Profil</a>
        <a href="#skills">Compétences</a>
        <a href="#experiences">Expériences</a>
        <a href="#projets">Projets</a>
        <a className="navbar__cta" href="#contact">
          Travaillons ensemble
        </a>
      </nav>
    </header>
  );
}
