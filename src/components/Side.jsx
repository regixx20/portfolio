import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import { email, socialMedia } from "../config";
import { usePrefersReducedMotion } from "../hooks";

const LOADER_DELAY = 400;

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

function useDelayedMount() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), LOADER_DELAY);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return { isMounted, prefersReducedMotion };
}

export function Social() {
  const { isMounted, prefersReducedMotion } = useDelayedMount();

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`side side--left ${prefersReducedMotion ? "" : "fadeup"}`}>
      <ul className="side__social">
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
    </div>
  );
}

export function Email() {
  const { isMounted, prefersReducedMotion } = useDelayedMount();

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`side side--right ${prefersReducedMotion ? "" : "fadeup"}`}>
      <div className="side__email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}
