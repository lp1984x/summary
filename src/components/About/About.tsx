import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { ILang } from "../../models";
import * as Icon from "react-bootstrap-icons";

interface IProp {
  props: ILang;
  state: string;
}

export default function About({ props, state }: IProp) {
  const pets = [
    {
      title: "ToDo",
      desc_ru: `Адаптивный cписок дел`,
      desc_en: `Adaptive ToDo list`,
      netliLink: "https://lp84-todo.netlify.app/",
      gitLink: "https://github.com/lp1984x/ToDo",
    },
    {
      title: "Store",
      desc_ru:
        "Простой,адаптивныймакет, магазина с использованием TypyScript, React-bootstrap, redux-toolkit,",
      desc_en:
        "Simple and adaptive store with TypyScript, React-bootstrap, redux-toolkit, fake API",
      netliLink: "https://lp84-store.netlify.app/",
      gitLink: "https://github.com/lp1984x/store",
    },
    {
      title: "E-Commerce",
      desc_ru:
        "Адаптивный магазина по макету из итернета с использованием TypyScript, redux-toolkit, scss, fake API",
      desc_en:
        "Adaptive store layout from the internet with Typescript, redux-toolkit, scss, fakeAPI",
      netliLink: "https://lp84-ecommerce.netlify.app/",
      gitLink: "https://github.com/lp1984x/e-commerce",
    },
    {
      title: "FUNBOX",
      desc_ru: "Тестовое здание",
      desc_en: "Test task",
      netliLink: "https://lp84-react-funbox.netlify.app/",
      gitLink: "https://github.com/lp1984x/react-FUNBOX",
    },
  ];

  return (
    <Container className="col-lg-9 py-5 p-lg-5">
      <h4 className="text-center">{props.title}</h4>
      <h5>{props.aboutMe.title}</h5>
      <p className="ms-4">{props.aboutMe.article}</p>
      <h5>{props.techSlkils.title}</h5>
      <ul>
        <h6>{props.techSlkils.languages.title}</h6>
        <p className="ms-4">{props.techSlkils.languages.article}</p>
        <h6>{props.techSlkils.frameworks.title}</h6>
        <p className="ms-4">{props.techSlkils.frameworks.article}</p>
        <h6>{props.techSlkils.ide.title}</h6>{" "}
        <p className="ms-4">{props.techSlkils.ide.article}</p>
        <h6>{props.techSlkils.tools.title}</h6>{" "}
        <p className="ms-4">{props.techSlkils.tools.article}</p>
      </ul>
      <h5>{props.eng.title}</h5>
      <p className="ms-4">{props.eng.article}</p>
      <h5>{props.education.title}</h5>
      <p className="ms-4">{props.education.article}</p>
      <h5>Pet Projects:</h5>
      <Accordion flush>
        {pets.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
              {state === "RU" ? <p>{item.desc_ru}</p> : <p>{item.desc_en}</p>}
              <a href={item.netliLink} className="text-decoration-none me-2">
                Netlify
              </a>
              <a href={item.gitLink}>
                <Icon.Github className="fs-4" />
              </a>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
