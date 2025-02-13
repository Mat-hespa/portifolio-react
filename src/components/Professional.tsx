import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ExperienceItem: React.FC<{
  period: string;
  role: string;
  company: string;
  description: string;
  isLast: boolean;
}> = ({ period, role, company, description, isLast }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex mb-8 relative">
      <div className="mr-4 flex flex-col items-center">
        <div
          className={`rounded-full p-2 z-10 ${
            isDarkMode ? "bg-[#243647]" : "bg-gray-300"
          }`}
        >
          <FaBriefcase className={isDarkMode ? "text-white" : "text-black"} />
        </div>
        {!isLast && (
          <div
            className={`w-0.5 h-full ${
              isDarkMode ? "bg-[#243647]" : "bg-gray-300"
            }`}
          ></div>
        )}
      </div>
      <div className="flex-grow">
        <span
          className={`text-sm ${
            isDarkMode ? "text-[#93adc8]" : "text-gray-600"
          }`}
        >
          {period}
        </span>
        <h3 className="text-xl font-semibold mt-1">{role}</h3>
        <p className={isDarkMode ? "text-[#93adc8]" : "text-gray-700"}>
          {company}
        </p>
        <p
          className={`mt-2 ${isDarkMode ? "text-[#93adc8]" : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      period: "2024 - Present",
      role: "Mid-level Software Engineer",
      company: "CI&T",
      description:
        "Refatoração da jornada do cliente com seu gerente de relacionamento na azure, desenvolvimento de atendimento digital para diferentes segmentos de clientes, e criação do projeto de contestação de débito em um aplicativo financeiro de grande escala.",
    },
    {
      period: "2022 - 2024",
      role: "Junior Software Engineer",
      company: "CI&T",
      description:
        "Desenvolvimento de ofertas para clientes dentro do aplicativo e criação de API para integração entre jornadas transacionais e nativas do aplicativo digital de um banco líder do setor.",
    },
    {
      period: "2022",
      role: "Estagiário de Desenvolvimento de Software",
      company: "CI&T",
      description:
        "Desenvolvimento de funcionalidades para a home do aplicativo de uma grande instituição financeira e manutenção de sistemas web.",
    },
    {
      period: "2022",
      role: "Instrutor de Informática",
      company: "Microlins",
      description:
        "Responsável pelo treinamento de alunos em ferramentas básicas e intermediárias de informática.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Experiência Profissional</h2>
      <div className="space-y-6 relative">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
