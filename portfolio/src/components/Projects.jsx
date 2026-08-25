import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "To Do Smart",
    description:
      "Aplicação de gerenciamento de tarefas desenvolvida com React, com foco em organização, produtividade e integração futura com Google Agenda e WhatsApp.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Rodobank System",
    description:
      "Sistema web desenvolvido com Laravel para gerenciamento de usuários, autenticação, cadastro, edição e exclusão de registros.",
    technologies: ["PHP", "Laravel", "MySQL", "Blade"],
    github: "#",
    demo: "#",
  },
  {
    title: "Movie App",
    description:
      "Aplicação de filmes utilizando React e integração com API externa para exibição de filmes, informações e categorias.",
    technologies: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Urielsousa/movie-app",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfólio</span>

          <h2 className="section-title">Meus Projetos</h2>

          <p className="section-description">
            Alguns dos projetos que desenvolvi durante meus estudos e minha
            evolução como desenvolvedor.
          </p>

          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="project-icon"></div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="technology">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
