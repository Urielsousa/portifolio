import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          Uriel Vieira<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link">
            Início
          </a>

          <a href="#sobre" className="nav-link">
            Sobre
          </a>

          <a href="#skills" className="nav-link">
            Skills
          </a>

          <a href="#projetos" className="nav-link">
            Projetos
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="https://github.com/Urielsousa"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/5585996499335"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </nav>
  );
}
