import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="./logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="#residencies">Residencies</Nav.Link>
              <Nav.Link href="#value">Our Value</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <Nav.Link href="#Get-Started">Get Started</Nav.Link>
              <Button className="button">Contact Us</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
