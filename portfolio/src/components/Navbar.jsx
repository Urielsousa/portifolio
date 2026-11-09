import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { name: "INÍCIO", href: "#home" },
    { name: "SOBRE", href: "#sobre" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJETOS", href: "#projetos" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-container">
        {/* LOGO */}
        <a href="#home" className="logo">
          <span className="logo-symbol">UV</span>
          <span className="logo-extension">.exe</span>
        </a>

        {/* NAVEGAÇÃO */}
        <div className="nav-links">
          {links.map((link, index) => (
            <a key={link.name} href={link.href} className="nav-link">
              <span className="nav-number">0{index + 1}</span>
              {link.name}
            </a>
          ))}
        </div>

        {/* AÇÕES */}
        <div className="nav-actions">
          <div className="nav-status">
            <span className="nav-status-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>

          <a
            href="https://github.com/Urielsousa"
            target="_blank"
            rel="noreferrer"
            className="github-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/5585996499335"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            <span>LET'S TALK</span>
            <span className="nav-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="navbar-bottom-line"></div>
    </motion.nav>
  );
}
