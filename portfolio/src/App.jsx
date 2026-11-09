import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projectes from "./components/Projects";

function App() {
  return (
    <main className="portfolio">
      <Navbar />

      <div className="portfolio-content">
        <Hero />
        <About />
        <Skills />
        <Projectes />
      </div>
    </main>
  );
}

export default App;
