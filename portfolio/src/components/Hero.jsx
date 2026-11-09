import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaCode,
  FaTerminal,
} from "react-icons/fa";

import perfil from "../assets/perfil.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>

      <div className="hero-container">
        {/* APRESENTAÇÃO */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="hero-status">
            <span className="status-dot"></span>
            SYSTEM ONLINE // DEVELOPER
          </div>

          <p className="hero-label">BEM-VINDO AO MEU UNIVERSO DIGITAL</p>

          <h1 className="hero-title">
            URIEL
            <br />
            <span className="glitch" data-text="VIEIRA">
              VIEIRA
            </span>
          </h1>

          <h2 className="hero-subtitle">
            FRONT-END <span>DEVELOPER</span>
          </h2>

          <p className="hero-description">
            Desenvolvedor Front-End Júnior, apaixonado por tecnologia e
            desenvolvimento web. Transformo ideias em experiências digitais
            modernas, responsivas e funcionais.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="button-primary">
              <FaCode />
              EXPLORAR PROJETOS
            </a>

            <a
              href="https://wa.me/5585996499335"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              INICIAR CONTATO
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Urielsousa"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/uriel-vieira1/"
              target="_blank"
              rel="noreferrer"
              className="hero-social"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* PAINEL VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hud-panel">
            <div className="hud-header">
              <span>USER_PROFILE.exe</span>
              <span className="hud-indicator">● ACTIVE</span>
            </div>

            <div className="avatar-container">
              <div className="avatar-frame">
                <img
                  src={perfil}
                  alt="Foto de perfil de Uriel Vieira"
                  className="avatar-image"
                />
              </div>

              <div className="avatar-scan"></div>
            </div>

            <div className="hud-info">
              <div>
                <span>IDENTITY</span>
                <strong>URIEL VIEIRA</strong>
              </div>

              <div>
                <span>OCCUPATION</span>
                <strong>FRONT-END DEV</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong className="online-text">AVAILABLE FOR PROJECTS</strong>
              </div>
            </div>

            <div className="hud-footer">
              <FaTerminal />
              <span>UV_SYSTEM // 2026</span>
              <span>100%</span>
            </div>
          </div>

          <div className="floating-code">&lt; CODE /&gt;</div>
        </motion.div>
      </div>

      <a href="#sobre" className="scroll-down">
        <FaArrowDown />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}
