import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">
        <section id="profil"><Profile /></section>
        <section id="experiences"><Experiences /></section>
        <section id="projets"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
