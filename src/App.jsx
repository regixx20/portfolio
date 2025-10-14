import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("profil");

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll(".app-main .section")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar activeSection={activeSection} />
      <main className="app-main">
        <section id="profil" className="section"><Profile /></section>
        <section id="skills" className="section section--accent"><Skills /></section>
        <section id="experiences" className="section"><Experiences /></section>
        <section id="projets" className="section section--accent"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
