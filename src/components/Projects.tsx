import React from "react";
import Slider from "react-slick";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUtensils,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ProjectCard: React.FC<{
  name: string;
  description: string;
  icon: React.ElementType;
  githubLink: string;
  liveLink: string;
}> = ({ name, description, icon: Icon, githubLink, liveLink }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="px-2">
      <div
        className={`${
          isDarkMode ? "bg-[#243647]" : "bg-gray-100"
        } rounded-lg shadow-lg overflow-hidden h-full flex flex-col`}
      >
        <div className="p-6 flex-grow">
          <div className="text-center mb-4">
            <Icon
              className={`text-6xl mx-auto ${
                isDarkMode ? "text-[#93adc8]" : "text-gray-700"
              }`}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p
            className={`mb-4 ${
              isDarkMode ? "text-[#93adc8]" : "text-gray-700"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="p-4 border-t border-gray-200 flex justify-between">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "text-white hover:text-[#6e5494]"
                : "text-gray-700 hover:text-[#6e5494]"
            }`}
          >
            <FaGithub className="inline mr-2" />
            GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "text-white hover:text-[#0077B5]"
                : "text-gray-700 hover:text-[#0077B5]"
            }`}
          >
            <FaExternalLinkAlt className="inline mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      name: "Cardápio digital",
      description:
        "Um sistema completo desde o cardápio digital, sistema de gerenciamento de pedidos, até o controle de estoque e estatísticas.",
      icon: FaUtensils,
      githubLink: "https://github.com/Mat-hespa/menu-numerique",
      liveLink: "https://menu-numerique.vercel.app/menu?tableId=9999999",
    },
    {
      name: "Portifolio em Angular",
      description:
        "Projeto simples e direto, com um design minimalista para criação de um portifolio pessoal, feito no inicio da minha carreira.",
      icon: FaUserTie,
      githubLink: "https://github.com/Mat-hespa/page-portifolio",
      liveLink: "https://portifolio-curriculo.vercel.app/",
    },
    {
      name: "Finanças web",
      description:
        "Projeto criado em poucas horas para controle de finanças pessoais, sem a necessidade de banco de dados, usando local storage.",
      icon: FaChartLine,
      githubLink: "https://github.com/Mat-hespa/controle-financas",
      liveLink: "https://controle-financas-iota.vercel.app/",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Projetos</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Slider>
    </section>
  );
};

export default ProjectsSection;
