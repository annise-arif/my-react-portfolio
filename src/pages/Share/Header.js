import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../Images/logo-arif.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home"><img style={{width: '110px'}} src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              Features
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
