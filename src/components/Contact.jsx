const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/regixx20",
    description: "Code source, expérimentations et projets open-source",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/régix-mededji",
    description: "Parcours professionnel, veille et échanges", 
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="section-title">Restons en contact</h2>
      <p className="section-subtitle">
        Un projet, une opportunité ou simplement l&apos;envie d&apos;échanger ? J&apos;apprécie toujours discuter de
        technologies et de nouveaux défis.
      </p>
      <a className="contact__email" href="mailto:mededjiregix20@gmail.com">
        mededjiregix20@gmail.com
      </a>
      <div className="contact__links">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="contact__card">
            <span>{link.label}</span>
            <p>{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
