import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="sobre" className="w-full py-24 px-6 bg-[#111111]">
      {/* CONTAINER PRINCIPAL */}
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
            Sobre mim
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Conheça um pouco da minha história
          </h2>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Desenvolvedor Front-End em evolução 🚀
            </h3>

            <div className="space-y-5 text-gray-400 leading-relaxed">
              <p>
                Sou estudante de{" "}
                <span className="text-white font-medium">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                e venho desenvolvendo minhas habilidades através de projetos
                práticos em desenvolvimento web.
              </p>

              <p>
                Tenho interesse em criar interfaces modernas, responsivas e
                intuitivas, sempre buscando aprender novas tecnologias e
                melhorar minhas habilidades.
              </p>

              <p>
                Meu objetivo é iniciar minha carreira como{" "}
                <span className="text-green-500 font-medium">
                  Desenvolvedor Front-End Júnior
                </span>{" "}
                e continuar evoluindo profissionalmente na área de tecnologia.
              </p>
            </div>
          </motion.div>

          {/* CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full flex flex-col gap-5"
          >
            {/* FORMAÇÃO */}
            <div className="w-full bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl">
                  <FaGraduationCap className="text-green-500 text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">Formação</h4>

                  <p className="text-gray-400">
                    Análise e Desenvolvimento de Sistemas
                  </p>
                </div>
              </div>
            </div>

            {/* DESENVOLVIMENTO */}
            <div className="w-full bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl">
                  <FaCode className="text-green-500 text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">
                    Desenvolvimento
                  </h4>

                  <p className="text-gray-400">
                    React, JavaScript, HTML, CSS, Tailwind CSS e Node.js
                  </p>
                </div>
              </div>
            </div>

            {/* OBJETIVO */}
            <div className="w-full bg-[#181818] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-xl">
                  <FaRocket className="text-green-500 text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-1">Objetivo</h4>

                  <p className="text-gray-400">
                    Conquistar uma oportunidade como Desenvolvedor Front-End
                    Júnior.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
