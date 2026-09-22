import { useState, useEffect, useRef } from "react";
import { navLinks } from "../config";
import { useScrollDirection, usePrefersReducedMotion } from "../hooks";

const LOADER_DELAY = 100;

export default function Nav() {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection, scrolledToTop } = useScrollDirection();
  const prefersReducedMotion = usePrefersReducedMotion();
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), LOADER_DELAY);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.classList.toggle("blur", menuOpen);
    return () => document.body.classList.remove("blur");
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const headerClass = [
    "header",
    !scrolledToTop && scrollDirection === "up" ? "header--up" : "",
    !scrolledToTop && scrollDirection === "down" && !menuOpen
      ? "header--down"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const animate = (index) =>
    prefersReducedMotion
      ? undefined
      : { animationDelay: `${index * 100}ms` };

  const animationClass = prefersReducedMotion ? "" : "fadedown";

  return (
    <header className={headerClass}>
      <nav className="nav" aria-label="Navigation principale">
        <div className="nav__logo">
          {isMounted && (
            <a
              href="/"
              aria-label="Accueil"
              className={animationClass}
              style={animate(0)}
            >
              R
            </a>
          )}
        </div>

        <div className="nav__links">
          <ol>
            {isMounted &&
              navLinks.map((link, i) => (
                <li
                  key={link.name}
                  className={animationClass}
                  style={animate(i + 1)}
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
          </ol>
          {isMounted && (
            <a
              className={`small-button nav__resume ${animationClass}`}
              href="https://github.com/regixx20"
              target="_blank"
              rel="noreferrer"
              style={animate(navLinks.length + 1)}
            >
              GitHub
            </a>
          )}
        </div>

        <div className="menu">
          <button
            type="button"
            className={`menu__hamburger ${menuOpen ? "menu__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="menu__hamburger-box">
              <div className="menu__hamburger-inner" />
            </div>
          </button>

          <aside
            id="mobile-menu"
            ref={sidebarRef}
            className={`menu__sidebar ${menuOpen ? "menu__sidebar--open" : ""}`}
            aria-hidden={!menuOpen}
          >
            <nav aria-label="Navigation mobile">
              <ol>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ol>
              <a
                className="big-button menu__resume"
                href="https://github.com/regixx20"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
}
