import { motion } from "framer-motion";
import "./projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaTerminal,
} from "react-icons/fa";

const projects = [
  {
    code: "01",
    title: "Cadastro de Usuários",
    description:
      "Aplicação web para cadastro e gerenciamento de usuários, desenvolvida para praticar componentes, formulários e manipulação de dados.",
    technologies: ["React", "JavaScript", "Vite", "CSS"],
    github: "https://github.com/Urielsousa/cadastro-devclub-usuarios",
    demo: null,
    category: "FRONT-END APPLICATION",
  },
  {
    code: "02",
    title: "Rodobank System",
    description:
      "Sistema web desenvolvido com Laravel para gerenciamento de usuários, autenticação, cadastro, edição e exclusão de registros.",
    technologies: ["PHP", "Laravel", "MySQL", "Blade"],
    github: "https://github.com/Urielsousa/rodobank-system",
    demo: null,
    category: "BACK-END SYSTEM",
  },
  {
    code: "03",
    title: "Movie App",
    description:
      "Aplicação de filmes integrada à API do TMDb, com exibição de filmes, informações, avaliações e navegação por conteúdos.",
    technologies: ["Next.js", "React", "TypeScript", "API"],
    github: "https://github.com/Urielsousa/movie-app",
    demo: null,
    category: "FULLSTACK INTERFACE",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        {/* HEADER */}

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">// PROJECT_DATABASE</span>

          <h2 className="section-title">
            MEUS <span>PROJETOS</span>
          </h2>

          <p className="section-description">
            Aplicações e soluções desenvolvidas durante minha jornada como
            desenvolvedor Fullstack.
          </p>

          <div className="section-line" />
        </motion.div>

        {/* SYSTEM STATUS */}

        <div className="projects-system-status">
          <div className="projects-status-left">
            <span className="projects-pulse"></span>
            SYSTEM PROJECTS ONLINE
          </div>

          <span className="projects-counter">
            {String(projects.length).padStart(2, "0")} PROJECTS FOUND
          </span>
        </div>

        {/* PROJECTS GRID */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.code}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
            >
              {/* CARD HEADER */}

              <div className="project-card-header">
                <span className="project-code">PROJECT_{project.code}</span>

                <span className="project-status">
                  <span></span>
                  SOURCE AVAILABLE
                </span>
              </div>

              {/* PROJECT ICON */}

              <div className="project-icon">
                <FaCode />
                <span className="project-icon-glow"></span>
              </div>

              {/* CONTENT */}

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* TECHNOLOGIES */}

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="technology">
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINKS */}

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    SOURCE CODE
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-demo"
                    >
                      <FaExternalLinkAlt />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>

              {/* CARD FOOTER */}

              <div className="project-card-footer">
                <FaTerminal />
                <span>UV_SYSTEM / MODULE_{project.code}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER */}

        <div className="projects-footer">
          <span>UV.EXE // PROJECT DATABASE</span>
          <span>END_OF_PROJECTS_</span>
        </div>
      </div>
    </section>
  );
}
