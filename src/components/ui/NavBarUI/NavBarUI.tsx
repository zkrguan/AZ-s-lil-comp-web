import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarUI.css";
import { Nav, NavDropdown } from "react-bootstrap";
import GetQuoteButton from "../GetQuoteButton/GetQuoteButton";
const NavBarUI: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary Nav-Bar-Whole"
      data-bs-theme="light"
    >
      <Container className="Nav-Bar-Container">
        <Navbar.Brand href="#home" className="Nav-Brand">
          <img
            src="/logo-and-text.svg"
            width="300"
            height="100"
            className="d-inline-block align-top nav-logo-img"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Nav-Bar-Element" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="Nav-Bar-Element" href="#link">
              Link
            </Nav.Link>
            <NavDropdown
              className="Nav-Bar-Element"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="Nav-Bar-Element" href="#action/3.1">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item className="Nav-Bar-Element" href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="Nav-Bar-Element" href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="Nav-Bar-Element" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <GetQuoteButton></GetQuoteButton>
    </Navbar>
  );
};
export default NavBarUI;
