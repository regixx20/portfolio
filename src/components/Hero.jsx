import { useState, useEffect } from "react";
import { email } from "../config";
import { usePrefersReducedMotion } from "../hooks";

const NAV_DELAY = 300;

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsMounted(true);
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const items = [
    <h1 key="greeting">Salut, je m&apos;appelle</h1>,
    <h2 key="name" className="big-heading">
      Régix Mededji.
    </h2>,
    <h3 key="tagline" className="big-heading">
      Je construis des systèmes backend fiables.
    </h3>,
    <p key="intro">
      Ingénieur logiciel spécialisé en développement backend Java et Python. Je
      conçois des APIs et des services robustes, orientés performance, sécurité
      et qualité logicielle — aujourd&apos;hui autour des{" "}
      <a
        className="inline-link"
        href="#jobs"
      >
        agents IA appliqués à la cybersécurité
      </a>
      .
    </p>,
    <a key="cta" className="big-button hero__cta" href={`mailto:${email}`}>
      Prenons contact
    </a>,
  ];

  return (
    <section className="hero">
      {items.map((item, i) =>
        prefersReducedMotion ? (
          <div key={i}>{item}</div>
        ) : (
          isMounted && (
            <div
              key={i}
              className="fadeup"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {item}
            </div>
          )
        ),
      )}
    </section>
  );
}
