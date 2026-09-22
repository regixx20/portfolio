import { Github, Linkedin } from "lucide-react";
import { socialMedia } from "../config";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__social">
        {socialMedia.map(({ name, url }) => {
          const Icon = icons[name];
          return (
            <li key={name}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                {Icon ? <Icon size={20} /> : name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="footer__credit">
        <a
          href="https://github.com/regixx20"
          target="_blank"
          rel="noreferrer"
        >
          Conçu &amp; développé par Régix Mededji
        </a>
      </div>
    </footer>
  );
}
