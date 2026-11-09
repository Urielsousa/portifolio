import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaTerminal,
  FaMicrochip,
} from "react-icons/fa";

import "./About.css";

const information = [
  {
    icon: <FaGraduationCap />,
    label: "EDUCATION",
    title: "Análise e Desenvolvimento de Sistemas",
    description: "Formação acadêmica em tecnologia e desenvolvimento.",
    code: "01",
  },
  {
    icon: <FaCode />,
    label: "SPECIALIZATION",
    title: "Front-End Development",
    description: "Criação de interfaces modernas, responsivas e funcionais.",
    code: "02",
  },
  {
    icon: <FaLaptopCode />,
    label: "TECH STACK",
    title: "React & JavaScript",
    description: "Desenvolvimento de aplicações e experiências web.",
    code: "03",
  },
];

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="about-container">
        {/* CABEÇALHO */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">// IDENTITY_DATABASE</span>

          <h2 className="section-title">
            CONHEÇA O <span>OPERADOR</span>
          </h2>

          <div className="section-line" />

          <p className="section-description">
            Um pouco sobre minha trajetória, meus objetivos e minha conexão com
            o desenvolvimento de software.
          </p>
        </motion.div>

        <div className="about-content">
          {/* PERFIL */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-terminal">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>ABOUT_URIEL.exe</span>

                <FaTerminal />
              </div>

              <div className="terminal-body">
                <p className="terminal-command">
                  <span>root@uv-system:~$</span> whoami
                </p>

                <h3>
                  Olá, eu sou <span>Uriel Vieira.</span>
                </h3>

                <p>
                  Sou estudante de Análise e Desenvolvimento de Sistemas e
                  desenvolvedor Front-End Júnior, apaixonado por tecnologia e
                  criação de experiências digitais.
                </p>

                <p>
                  Tenho desenvolvido projetos utilizando HTML, CSS, JavaScript,
                  React e também explorando o desenvolvimento de APIs com C#.
                </p>

                <p>
                  Meu objetivo é continuar evoluindo como desenvolvedor,
                  construir soluções úteis e transformar ideias em aplicações
                  reais.
                </p>

                <div className="terminal-footer">
                  <FaMicrochip />
                  <span>USER PROFILE LOADED SUCCESSFULLY</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* INFORMAÇÕES */}
          <div className="about-cards">
            {information.map((item, index) => (
              <motion.div
                className="about-card"
                key={item.code}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <div className="about-card-code">[{item.code}]</div>

                <div className="about-card-icon">{item.icon}</div>

                <div className="about-card-content">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="about-card-indicator">●</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
