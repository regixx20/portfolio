import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="app-layout">
      <Navbar />
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;