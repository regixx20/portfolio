import { email } from "../config";
import { useScrollReveal } from "../hooks";

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="contact reveal" ref={revealRef}>
      <h2 className="numbered-heading overline">Et maintenant ?</h2>

      <h2 className="contact__title">Prenons contact</h2>

      <p>
        Je suis ouvert aux opportunités autour du développement backend et des
        systèmes d&apos;IA appliqués. Que vous ayez un projet, une question ou
        simplement l&apos;envie d&apos;échanger sur la tech, ma boîte mail est
        toujours ouverte.
      </p>

      <a className="big-button contact__cta" href={`mailto:${email}`}>
        Dites bonjour
      </a>
    </section>
  );
}
