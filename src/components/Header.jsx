import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Imagen alineada a la izquierda */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://tofuu.getjusto.com/orioneat-local/resized2/BAbPLCBTJhJkJJx5F-1400-x.webp"
            alt="Brand Logo"
            className="d-inline-block align-top"
            style={{ height: '40px' }} // Ajusta la altura según sea necesario
          />
        </Navbar.Brand>

        {/* Links "Home" y "Contacto" centrados */}
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Menu">Menu</Nav.Link>
        </Nav>

        {/* Links "Sign Up" y "Login" alineados a la derecha */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/Signup">Sign Up</Nav.Link>
          <Nav.Link as={Link} to="/Login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
