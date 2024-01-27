import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';

import Link from 'next/link';
import { signOut } from '../utils/auth';

function NavBar() {
  const [value, setValue] = useState('');
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
            <div>
              <p className="titleText"> Search</p>
              <input
                type="text"
                className="SearchBar"
                onChange={(event) => setValue(event.target.value)}
                value
              />
            </div>
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
