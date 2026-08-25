import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "Front-End",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "Front-End",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "Front-End",
  },

  {
    name: "React",
    icon: <FaReact />,
    category: "Front-End",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Tecnologias</span>

          <h2 className="section-title">Minhas Skills</h2>

          <p className="section-description">
            Tecnologias e ferramentas que utilizo nos meus estudos e projetos de
            desenvolvimento.
          </p>

          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
            >
              <div className="skill-icon">{skill.icon}</div>

              <h3 className="skill-name">{skill.name}</h3>

              <span className="skill-category">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
