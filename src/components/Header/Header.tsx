import React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Col className="col-lg-3">
      <Navbar bg="dark" variant="dark">
        <Container className="vh-100 flex-column align-items-end justify-content-start">
          <Navbar.Brand
            href="#home"
            className="d-flex flex-column align-items-end"
          >
            <img
              src="/logo.jpg"
              width="100"
              height="100"
              className="d-inline-block my-5 rounded-circle"
              alt="logo"
            />
            <p className="fs-2 mb-0">Larichev Pavel</p>
            <p className="fs-6">FrondEnd Developer</p>
          </Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Pets</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Col>
  );
}
