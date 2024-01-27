import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Form, FormControl,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const [search ,setSearch] = React.useState('');
  
  const handleSearch = (event)
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </Link>
            <Link passHref href="/team/new">
              <Nav.Link>Team Roster</Nav.Link>
            </Link>
            <Link passHref href="/team/edit/new">
              <Nav.Link>Create NEW Player</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button type="button" size="lg" className="sign-out" onClick={signOut}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
