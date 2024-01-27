import algoliasearch from 'algoliasearch';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Form, FormControl,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
);
export default function NavBar() {
  const [search, setSearch] = React.useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    console.warn('search term', search);

    const algoliaIndex
  };
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
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
          <Button type="button" size="lg" className="sign-out" onClick={signOut}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
