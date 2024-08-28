import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { LiaUniversitySolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Começo do curso técnico integrado ao Ensino Médio",
    location: "SENAI, Blumenau",
    description:
      "Neste curso posso aprender tanto front-end(CSS e JavaScript), back-end(Java) e banco de dados(MySQL), onde faço a elaboração de projetos junto a equipes, utilizando a metodologia SCRUM para desevolver os projetos, além de estar moldando o meu futuro no mercado de trabalho, mostrando que para conquistar nossas coisas devemos ter proatividade para buscar os nosso sonhos. ",
    icon: React.createElement(LuGraduationCap),
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
    title: "Curso de FLutter",
    location: "Lince Tech, Gaspar",
    description:
      "Curso focado no aprendizado para desenvolvimento Mobile, com a Linguagem de Programação Dart junto ao framework FLutter, muitos aprendizados e também feito um bom network com pessoas que já trabalham na área para que possa entender como é as suas tarefas e organização para conseguir entregar o trabalho proposto. ",
    icon: React.createElement(LiaUniversitySolid),
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