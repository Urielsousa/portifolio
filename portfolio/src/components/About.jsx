export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Sobre mim</span>

          <h2 className="section-title">Conheça um pouco da minha história</h2>

          <div className="section-line" />
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou
              aprimorando minhas habilidades no desenvolvimento web.
            </p>

            <p>
              Tenho interesse principalmente em desenvolvimento Front-End,
              utilizando tecnologias como HTML, CSS, JavaScript e React.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>🎓 Formação</h3>
              <p>Análise e Desenvolvimento de Sistemas</p>
            </div>

            <div className="about-card">
              <h3>💻 Foco</h3>
              <p>Desenvolvimento Front-End</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
