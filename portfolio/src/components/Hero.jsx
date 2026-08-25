import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-label">Olá, eu sou</p>

          <h1 className="hero-title">
            Uriel
            <br />
            <span>Desenvolvedor</span>
            <br />
            Front-End.
          </h1>

          <p className="hero-description">
            Desenvolvedor Front-End Júnior, apaixonado por tecnologia e
            desenvolvimento web. Transformo ideias em experiências digitais
            modernas, responsivas e funcionais.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="button-primary">
              Ver meus projetos
            </a>

            <a href="#contato" className="button-secondary">
              Entre em contato
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Urielsousa"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uriel-vieira1/"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="avatar-container">
            <div className="avatar">👨‍💻</div>
          </div>
        </motion.div>
      </div>

      <a href="#sobre" className="scroll-down">
        <FaArrowDown />
      </a>
    </section>
  );
}
