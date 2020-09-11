import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
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
      <Nav>
        <Dropdown>
          <Dropdown.Toggle className={'btn btn-ghost'}>
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={'/login'}>
              Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to={'/signup'}>
              Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
