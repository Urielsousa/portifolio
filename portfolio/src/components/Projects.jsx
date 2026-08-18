import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "To Do Smart",
    description:
      "Aplicação de gerenciamento de tarefas desenvolvida com React, com foco em organização, produtividade e integração futura com Google Agenda e WhatsApp.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Urielsousa/to-do-smart",
    demo: "#",
  },

  {
    title: "Rodobank System",
    description:
      "Sistema web desenvolvido com Laravel para gerenciamento de usuários, autenticação, cadastro, edição e exclusão de registros.",
    technologies: ["PHP", "Laravel", "MySQL", "Blade"],
    github: "https://github.com/Urielsousa/rodobank-system",
    demo: "#",
  },

  {
    title: "Movie App",
    description:
      "Aplicação de filmes utilizando React e integração com API externa para exibição de filmes, informações e categorias.",
    technologies: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Urielsousa/movie-app",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="w-full py-24 px-6 bg-[#111111]">
      <div className="w-full max-w-6xl mx-auto">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green-500 font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">Meus Projetos</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Alguns dos projetos que desenvolvi durante meus estudos e minha
            evolução como desenvolvedor.
          </p>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
            >
              {/* IMAGEM TEMPORÁRIA */}
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-transparent flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed text-sm min-h-[100px]">
                  {project.description}
                </p>

                {/* TECNOLOGIAS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-white/10 hover:border-green-500 px-4 py-2 rounded-lg text-sm transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition"
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
