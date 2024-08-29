import React from "react";

//IMPORT DE ICONS
import { RiNextjsLine } from "react-icons/ri";
import { LiaUniversitySolid } from "react-icons/lia";
import { MdOutlineFactory } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { FaSchool } from "react-icons/fa";
import projetoLince from "@/public/imgCarro.jpg";
import controleFuncionario from "@/public/funcionario.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Trajetória",
    hash: "#trajetoria",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const trajetoriaData = [
  {
    title: "Jovem Aprendiz",
    location: "Cia da Meia, Blumenau",
    description:
      "Como jovem aprendiz da empresa Cia da Meia, por conta da pandemia tive apenas aulas no cusro de Tecnologia da Informação no SENAI remotamente, desde aí me apaixonei pelo mundo da tecnologia, aprendendo conceitos básicos de lógica de programação, indo poucas vezes ao SENAI, para fazermos trabalhos como montagem e concertos de computadores e instalação de programas computacionais. ",
    icon: React.createElement(MdOutlineFactory),
    date: "01 - 12 / 2021",
  },
  {
    title: "Começo do curso técnico integrado ao Ensino Médio",
    location: "SENAI, Blumenau",
    description:
      "Neste curso posso aprender tanto front-end(CSS e JavaScript), back-end(Java) e banco de dados(MySQL), onde faço a elaboração de projetos junto a equipes, utilizando a metodologia SCRUM para desevolver os projetos, além de estar moldando o meu futuro no mercado de trabalho, mostrando que para conquistar nossas coisas devemos ter proatividade para buscar os nosso sonhos. ",
    icon: React.createElement(FaSchool),
    date: "02 / 2022 - Momento",
  },
  {
    title: "BootCamp da Eliti",
    location: "AMcom, Blumenau",
    description:
      "Entrei no BootCamp de Next.Js da Eliti onde no período de um mês evolui muito. Sai do conhecimento básico de Front-end até o meu primeiro projeto em React e Next, o que em pouco tempo aumentou meu domínio nas linguagens e me influenciou a focar mais no Front-end. ",
    icon: React.createElement(RiNextjsLine),
    date: "11 - 12 / 2023",
  },
  {
    title: "Maratona CyberEducação",
    location: "Cisco Networking Academy",
    description:
      "Por meio desta maratona percebi que tenho potencial para chegar onde eu quiser, apenas com esforço e dedicação para alcançar os meus objetivos, primeiramente teve uma seleção para escolher as pessoas a participar, e eu fiquei entre os 1500 selecionados entre 34 mil pessoas inscitas, a partir disso comecei a fazer o curso de CiberSecurity Essentials e logo após, pude realizar mais o curso de CyberOps Associate, onde no final dos dois cursos recebi um certificado e uma carta mérito por conta das ótimas notas em ambos os cursos. ",
    icon: React.createElement(MdOutlineFactory),
    date: "10 / 2023 - 03 / 2024",
  },
  {
    title: "Curso de FLutter",
    location: "Lince Tech, Gaspar",
    description:
      "Curso focado no aprendizado para desenvolvimento Mobile, com a Linguagem de Programação Dart junto ao framework FLutter, muitos aprendizados e também feito um bom network com pessoas que já trabalham na área para que possa entender como é as suas tarefas e organização para conseguir entregar o trabalho proposto. ",
    icon: React.createElement(TbSchool),
    date: "04 - 07 / 2024",
  },
  {
    title: "INDUSPHERE",
    location: "SENAI, Blumenau",
    description:
      "Como um dos projetos finais do meu curso, minha turma está produzinho a INDUSPHERE, um sistema automatizado completo para a indústria têxtil , onde ajudo principalmente com o front-end (feito em HTML,CSS e JS) e na modelagem do banco de dados. No geral, o processo vem me proporcionando muita experiência em criação de projetos, trabalho em grupos e método SCRUM. ",
    icon: React.createElement(LiaUniversitySolid),
    date: "06 / 2024 - Momento",
  },
] as const;

export const projectsData = [
  {
    title: "Alugúel de carro",
    description:
      "App para aluguél de carro para pessoa jurídicas, feito no curso de flutter da Lince Tech.",
    tags: ["Flutter" , "Dart" , "SQlite"],
    imageUrl: projetoLince,
  },
  {
    title: "Controle Funcionário", 
    description:
      "Projeto das aulas de Desenvolimento de Sistemas, Controle de funionários de uma empresa, onde o usuário pode adicionar, editar, visualizar os departamento, funcionários e a folha de pagamento.",
    tags: ["Java" , "MySQL"],
    href: "https://github.com/NicolasKLange/ControleFuncionario",
    imageUrl: controleFuncionario,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Flutter",
  "Dart",
  "Java",
  "SQlite",
  "SQL",
  "Git",
  "Figma",
] as const;