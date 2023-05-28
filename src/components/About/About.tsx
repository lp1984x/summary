import React from "react";
import { Container, Nav } from "react-bootstrap";
import { ILang } from "../../models";

interface IProp {
  props: ILang;
}

export default function About({ props }: IProp) {
  return (
    <Container className="col-lg-9 pt-5 p-lg-5">
      <h4 className="text-center">{props.title}</h4>
      <h5>{props.aboutMe.title}</h5>
      <p className="ms-4">{props.aboutMe.title}</p>
      <h5>{props.techSlkils.title}</h5>
      <p className="ms-4">
        <h6>{props.techSlkils.languages.title}</h6>
        <p className="ms-4">{props.techSlkils.languages.article}</p>
        <h6>{props.techSlkils.frameworks.title}</h6>
        <p className="ms-4">{props.techSlkils.frameworks.article}</p>
        <h6>{props.techSlkils.ide.title}</h6>{" "}
        <p className="ms-4">{props.techSlkils.ide.article}</p>
        <h6>{props.techSlkils.tools.title}</h6>{" "}
        <p className="ms-4">{props.techSlkils.tools.article}</p>
      </p>
      <h5>{props.eng.title}</h5>
      <p className="ms-4">{props.eng.article}</p>
      <h5>{props.education.title}</h5>
      <p className="ms-4">{props.education.article}</p>
      <h5>Pet Projects:</h5>

      <p className="ms-5">
        <Nav.Link href="https://lp84-store.netlify.app/">
          <h6>Store</h6>
        </Nav.Link>
        Description:
      </p>
      <p className="ms-5">
        <Nav.Link href="https://lp84-todo.netlify.app/">
          <h3>
            <h6>ToDo List</h6>
          </h3>
        </Nav.Link>
        Description:
      </p>
    </Container>
  );
}
