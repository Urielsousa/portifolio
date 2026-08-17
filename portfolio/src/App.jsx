import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";

import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
