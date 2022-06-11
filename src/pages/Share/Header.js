import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../Images/logo-arif.png';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img 
          data-aos="fade-up" 
          data-aos-anchor-placement="bottom-bottom"
           style={{width: '110px'}} 
           src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#projects">
              Projects
              </Nav.Link>
              <Nav.Link eventKey={2} href="#about-me-id">
              About Me
              </Nav.Link>
              <Nav.Link eventKey={2} href="blogs">
              Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
