import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

interface IProp {
  setLang: (n: string) => void;
}

export default function Header({ setLang }: IProp) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="justify-content-end align-items-start col-lg-3 col-12"
    >
      <Container className="align-items-center align-items-lg-end flex-lg-column justify-content-lg-end">
        <Navbar.Brand
          href="#home"
          className="d-flex flex-lg-column align-items-center align-items-lg-end m-0 "
        >
          <img
            src="/logo.jpg"
            width="100"
            height="100"
            className="my-lg-5 rounded-circle "
            alt="logo"
          />
          <Container className=" d-none d-lg-block">
            <p className="fs-3 mb-0 ">Larichev Pavel</p>
            <p className="fs-6 ">Junior FrondEnd Developer</p>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offca`}>
              <p className="fs-3 mb-0 ">Larichev Pavel</p>
              <p className="fs-6 ">Junior FrondEnd Developer</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="d-lg-flex flex-column align-items-end col-12">
              <Nav.Link href="#tell" className="d-flex align-items-center">
                8-909-624-01-73
                <Icon.TelephoneFill className="ms-3" />
              </Nav.Link>
              <Nav.Link href="@LP84X" className=" d-flex align-items-center">
                lp84@inbox.ru
                <Icon.EnvelopeAtFill className="ms-3" />
              </Nav.Link>
              <Nav.Link href="#none" className="d-flex align-items-center">
                @LP84X
                <Icon.Telegram className="ms-3" />
              </Nav.Link>
              <Nav.Link href="https://github.com/lp1984x" className=" ms-3">
                <Icon.Github />
              </Nav.Link>
              <Nav className="flex-row">
                <Nav.Link href="#RU" onClick={() => setLang("RU")}>
                  RU
                </Nav.Link>
                <Nav.Link
                  href="#slash"
                  className="py-0 px-1 fs-4"
                  style={{ pointerEvents: "none" }}
                >
                  |
                </Nav.Link>

                <Nav.Link href="#EN" onClick={() => setLang("EN")}>
                  EN
                </Nav.Link>
              </Nav>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
