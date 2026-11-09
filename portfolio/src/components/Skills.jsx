import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiDotnet,
} from "react-icons/si";

import "./Skills.css";

const skillGroups = [
  {
    title: "FRONT-END DEVELOPMENT",
    code: "01",
    icon: <FaCode />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "BACK-END DEVELOPMENT",
    code: "02",
    icon: <FaServer />,
    skills: [
      { name: "C#", icon: <FaCode /> },
      { name: ".NET / ASP.NET Core", icon: <SiDotnet /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Laravel", icon: <FaLaravel /> },
    ],
  },
  {
    title: "DATABASE",
    code: "03",
    icon: <FaDatabase />,
    skills: [{ name: "MySQL", icon: <SiMysql /> }],
  },
  {
    title: "DEVELOPMENT TOOLS",
    code: "04",
    icon: <FaCode />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills-container">
        {/* HEADER */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">// FULLSTACK_DATABASE</span>

          <h2 className="section-title">
            MEU <span>ARSENAL</span> DIGITAL
          </h2>

          <p className="section-description">
            Tecnologias e ferramentas que utilizo para desenvolver interfaces,
            aplicações web e soluções Back-End.
          </p>

          <div className="section-line" />
        </motion.div>

        {/* SYSTEM STATUS */}
        <div className="skills-system-status">
          <div className="skills-status-left">
            <span className="skills-pulse"></span>
            <span>FULLSTACK SYSTEM ONLINE</span>
          </div>

          <span className="skills-counter">
            {String(totalSkills).padStart(2, "0")} MODULES DETECTED
          </span>
        </div>

        {/* CATEGORIAS */}
        <div className="skills-categories">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className="skills-group"
              key={group.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.12,
              }}
            >
              <div className="skills-group-header">
                <div className="skills-group-title">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>

                <span className="skills-group-code">SECTION_{group.code}</span>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -7, scale: 1.03 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                  >
                    <div className="skill-card-top">
                      <span className="skill-code">
                        MOD_{String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="skill-indicator">●</span>
                    </div>

                    <div className="skill-icon">{skill.icon}</div>

                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-loaded">MODULE AVAILABLE</span>
                    </div>

                    <div className="skill-card-line"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="skills-footer">
          <span>UV_SYSTEM // FULLSTACK DATABASE</span>
          <span>END_OF_MODULES_</span>
        </div>
      </div>
    </section>
  );
}
