import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container } from "./styles";
import { ParticlesComponent } from "../../components/ParticlesComponent";
import { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { MdMail } from "react-icons/md";

import meJpeg from "../../assets/images/me.jpeg";
import resume from "../../assets/pdf/RenatoNascimentoResume.pdf";
import aitmospheric from "../../assets/images/aitmospheric.png";

export function Home() {
  const scrollToElement = (elementId) => {
    console.log("entrei");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = () => {
    // Substitua "/caminho/para/seu/arquivo.pdf" pelo caminho real do seu arquivo
    const fileUrl = resume;

    // Crie um elemento "a" dinamicamente
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Renato_Resumé.pdf"; // Substitua pelo nome desejado para o arquivo
    document.body.appendChild(link);

    // Dispare um evento de clique no elemento "a" para iniciar o download
    link.click();

    // Remova o elemento "a" após o download
    document.body.removeChild(link);
  };

  const [hoveredTech, setHoveredTech] = useState(null);

  const techData = [
    { name: "JavaScript", icon: <BiLogoJavascript className="js" size={60} /> },
    { name: "React", icon: <BiLogoReact className="react" size={60} /> },
    { name: "Node.js", icon: <BiLogoNodejs className="node" size={60} /> },
    { name: "HTML5", icon: <BiLogoHtml5 className="html" size={60} /> },
    { name: "CSS3", icon: <BiLogoCss3 className="css" size={60} /> },
  ];

  const handleTechHover = (techName) => {
    setHoveredTech(techName);
  };

  const handleTechLeave = () => {
    setHoveredTech(null);
  };

  const projects = [
    {
      name: "AITMOSPHERIC",
      description:
        "Projeto frontend realizado com o objetivo de um de ML Engineer publicar de forma prática seu experimento de IA baseado em áudio.",
      link: "https://aitmospheric.vercel.app/",
      photo: aitmospheric,
    },
  ];

  return (
    <div>
      <ParticlesComponent />

      <Container>
        <Header handleScrollElement={scrollToElement} />

        <main>
          <div className="description" id="home">
            <h2>
              Olá, eu sou Renato Pessoa, desenvolvedor web se especializando em{" "}
              <span>ReactJS</span> e <span>Express</span>
            </h2>

            <button>
              <BsChevronDown
                size={36}
                onClick={() => scrollToElement("techs")}
              />
            </button>
          </div>

          <div className="techsContainer" id="techs">
            <h2>
              Algumas das <span>tecnologias que eu uso</span>
            </h2>

            <div className="techs">
              {techData.map((tech) => (
                <div
                  key={tech.name}
                  className="techItem"
                  onMouseEnter={() => handleTechHover(tech.name)}
                  onMouseLeave={handleTechLeave}
                >
                  {tech.icon}
                  {hoveredTech === tech.name && (
                    <div className="techCard">
                      <p>{tech.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="projectsContainer" id="projects">
            <h2>
              <span>Projetos</span> Selecionados
            </h2>

            <div className="projects">
              {projects.map((project) => (
                <Card
                  title={project.name}
                  description={project.description}
                  photo={project.photo}
                  link={project.link}
                />
              ))}
            </div>
          </div>

          <div className="aboutContainer" id="about">
            <div>
              <h2>um pouco sobre mim</h2>

              <p>
                Eu sou um <span>desenvolvedor web</span> apaixonado em criar
                boas experiências para os usuários. Além de desenvolver
                projetos, <span>eu amo escutar música</span>, <span>jogar</span>
                , <span>viajar</span> e <span>assistir futebol</span>.
              </p>
            </div>

            <img src={meJpeg} alt="" />
          </div>

          <div className="getInTouchContainer">
            <div>
              <h2>
                Get <span>in Touch</span>
              </h2>
              <p>Então poderemos conversar melhor...</p>

              <button className="cvButton" onClick={handleDownloadClick}>
                Download CV
              </button>

              <section className="social">
                <a href="mailto:renatopanascimento@gmail.com">
                  <MdMail size={48} />
                </a>
                <a
                  href="https://www.linkedin.com/in/renatopnasc/"
                  target="_blank"
                >
                  <BiLogoLinkedinSquare size={48} />
                </a>
                <a href="https://github.com/renatopnasc" target="_blank">
                  <BiLogoGithub size={48} />
                </a>
              </section>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
