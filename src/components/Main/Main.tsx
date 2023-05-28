import React, { useState } from "react";
import "./main.scss";
import Header from "../Header/Header";
import About from "../About/About";

export default function Main() {
  const [laguage, setLanguage] = useState("RU");
  const en = {
    title: "Summary",
    aboutMe: {
      title: "About Me:",
      article: `I'm an enthusiastic and detail-oriented Frontend Software Engineer
              seeking an entry-level position with Company to use my skills in coding,
              troubleshooting complex problems, and assisting in the timely completion
              of projects.`,
    },
    techSlkils: {
      title: "Technical Skills:",
      languages: {
        title: "Programming languages:",
        article: "Javascript, Python",
      },
      frameworks: {
        title: "Технологии и фреймворки:",
        article:
          "HTML, CSS(sass), Bootstrap, Material-ui, React.js, typescript, Redux-Toolkit.",
      },
      ide: {
        title: "IDE:",
        article: "Vs code, Brackets",
      },
      tools: {
        title: "Building tools:",
        article: "NPM, Git, GitHub",
      },
    },
    eng: {
      title: "English Level:",
      article: "Pre-Intermediate/Intermediate",
    },
    education: {
      title: "Education:",
      article: "Moscow College of Computer Science and Computer Engineering",
    },
  };
  const ru = {
    title: "Резюме",
    aboutMe: {
      title: "Обо мне:",
      article: `Я увлеченный и ориентированный на детали инженер-программист Front-end
              ищу должность начального уровня в компании, чтобы использовать свои навыки в кодировании,
              устранении сложных проблем и оказании помощи в своевременном завершении проектов.`,
    },
    techSlkils: {
      title: "Технические навыки:",
      languages: {
        title: "Языки программирования:",
        article: "Javascript, Python",
      },
      frameworks: {
        title: "Технологии и Фреймворки:",
        article:
          "HTML, CSS(sass), Bootstrap, Material-ui, React.js, typescript, Redux-Toolkit.",
      },
      ide: {
        title: "IDE:",
        article: "Vs code, Brackets",
      },
      tools: {
        title: "Средства разработки:",
        article: "NPM, Git, GitHub",
      },
    },
    eng: {
      title: "Уровень Английского:",
      article: "Pre-Intermediate/Intermediate",
    },
    education: {
      title: "Образование:",
      article: "Московский Техникум Информатики и Вычислительной Техники",
    },
  };
  return (
    <main className="main">
      <Header setLang={setLanguage} />
      <About props={laguage === "RU" ? ru : en} />
    </main>
  );
}
