import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-500 font-medium mb-4">Olá, eu sou</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Uriel
            <br />
            <span className="text-gray-400">Desenvolvedor</span>
            <br />
            Front-End.
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
            Desenvolvedor Front-End Júnior, apaixonado por tecnologia e
            desenvolvimento web. Transformo ideias em experiências digitais
            modernas, responsivas e funcionais.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projetos"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Ver meus projetos
            </a>

            <a
              href="#contato"
              className="border border-white/20 hover:border-green-500 px-6 py-3 rounded-lg transition"
            >
              Entre em contato
            </a>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/Urielsousa"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uriel-vieira1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* IMAGEM / AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-green-500/30 flex items-center justify-center">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* INDICADOR DE SCROLL */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-green-500 transition"
      >
        <FaArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
