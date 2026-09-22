import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import { Social, Email } from "./components/Side";
import Hero from "./components/Hero";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetails";

function Layout({ children, fillHeight = false }) {
  return (
    <>
      <Nav />
      <Social />
      <Email />
      <div id="content">
        <main className={fillHeight ? "fillHeight" : ""}>{children}</main>
      </div>
      <Footer />
    </>
  );
}

function Home() {
  return (
    <Layout fillHeight>
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Contact />
    </Layout>
  );
}

function ProjectPage() {
  return (
    <Layout>
      <ProjectDetail />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
