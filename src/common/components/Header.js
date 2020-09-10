import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        React App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
