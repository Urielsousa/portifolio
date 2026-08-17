import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white">
          Uriel<span className="text-green-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Sobre
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Skills
          </a>

          <a
            href="#projetos"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="text-gray-300 hover:text-green-500 transition"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Urielsousa"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="#contato"
            className="hidden sm:block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </nav>
  );
}
