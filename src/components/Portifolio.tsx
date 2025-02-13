import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGit,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiRedux } from "react-icons/si";

import ProfessionalExperience from "./Professional";
import ProjectsSection from "./Projects";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";

const PortfolioContent: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const skills = [
    { name: "Angular", icon: <FaAngular /> },
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Java (Spring Boot)", icon: <FaJava /> },
    { name: "RxJS", icon: <FaCode /> },
    { name: "NgRx", icon: <SiRedux /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Azure DevOps", icon: <FaCloud /> },
    { name: "REST APIs", icon: <SiSpringboot /> },
  ];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDarkMode ? "bg-[#111a22] text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full transition duration-300 ${
          isDarkMode ? "bg-[#243647] text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <img
            src="/foto.jpeg"
            alt="Matheus Althman"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-2">
            Matheus Althman Hespagnola
          </h1>
          <p
            className={`text-xl ${
              isDarkMode ? "text-[#93adc8]" : "text-gray-600"
            }`}
          >
            Desenvolvedor Fullstack com foco em Frontend
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/matheus-althman-hespagnola-812441209/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className={`text-2xl ${
                  isDarkMode
                    ? "text-white hover:text-[#0077B5]"
                    : "text-gray-700 hover:text-[#0077B5]"
                } transition-colors`}
              />
            </a>
            <a
              href="https://github.com/Mat-hespa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className={`text-2xl ${
                  isDarkMode
                    ? "text-white hover:text-[#6e5494]"
                    : "text-gray-700 hover:text-[#6e5494]"
                } transition-colors`}
              />
            </a>
            <a href="mailto:matheushespa@outlook.com">
              <FaEnvelope
                className={`text-2xl ${
                  isDarkMode
                    ? "text-white hover:text-[#0072C6]"
                    : "text-gray-700 hover:text-[#0072C6]"
                } transition-colors`}
              />
            </a>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-[#93adc8]" : "text-gray-700"
            }`}
          >
            Desenvolvedor Fullstack com foco em Frontend, especialista em
            Angular e com sólida experiência na criação de interfaces modernas,
            responsivas e escaláveis. Experiência em microserviços com Node.js e
            Java (Spring Boot), integrando backend e frontend de forma
            eficiente. Atuei em projetos de grande porte para instituições
            financeiras, com destaque para migrações, otimização de sistemas e
            garantia de qualidade de código.
          </p>
        </section>

        <ProjectsSection />

        <ProfessionalExperience />

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Habilidades Técnicas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition duration-300 ${
                  isDarkMode
                    ? "bg-[#243647] text-white hover:bg-[#344d65]"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        className={`py-8 text-center ${
          isDarkMode ? "bg-[#243647]" : "bg-gray-200"
        }`}
      >
        <p className={isDarkMode ? "text-[#93adc8]" : "text-gray-700"}>
          © 2025 Matheus Althman Hespagnola. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

const Portfolio: React.FC = () => (
  <ThemeProvider>
    <PortfolioContent />
  </ThemeProvider>
);

export default Portfolio;
