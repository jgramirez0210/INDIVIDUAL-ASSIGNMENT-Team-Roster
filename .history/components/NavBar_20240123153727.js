
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import AddTeamMemberForm from './forms/addTeamMemberForm';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Button variant="danger" onClick={() => setShowForm(true)}>Add Player</Button>
            {showForm && <AddTeamMemberForm />}
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
