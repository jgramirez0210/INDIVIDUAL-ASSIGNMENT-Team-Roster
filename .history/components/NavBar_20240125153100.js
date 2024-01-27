import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import Link from 'next/link';
import { signOut } from '../utils/auth';

function NavBar({ search, setSearch, handleSearch }) {
  
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Team Roster</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/team/new">
              <Nav.Link>Team</Nav.Link>
            </Link>
            <Link passHref href="/team/edit/new">
              <Nav.Link>Create NEW Player</Nav.Link>
            </Link>
            <Button type="button" size="lg" className="sign-out" onClick={signOut}>Sign Out</Button>
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-info" type="submit">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
NavBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default NavBar;
