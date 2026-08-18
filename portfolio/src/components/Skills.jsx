import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    category: "Frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Frontend",
  },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
  },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: <FaGitAlt />,
    category: "Version Control",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    category: "Build Tool",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 bg-[#0f0f0f]">
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
            Tecnologias
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">Minhas Skills</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Tecnologias e ferramentas que utilizo nos meus estudos e projetos de
            desenvolvimento.
          </p>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* SKILLS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{ y: -6 }}
              className="group bg-[#181818] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-4xl text-gray-400 group-hover:text-green-500 transition-colors duration-300">
                {skill.icon}
              </div>

              <h3 className="text-white font-semibold mt-4">{skill.name}</h3>

              <span className="text-gray-500 text-sm mt-1">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
