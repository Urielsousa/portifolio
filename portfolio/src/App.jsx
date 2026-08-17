import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";

import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
