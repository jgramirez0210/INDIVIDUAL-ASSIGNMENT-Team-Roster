import React, { useState, useEffect }  from 'react';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';

import Link from 'next/link';
import { signOut } from '../utils/auth';

function NavBar() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (value.length > 0){
      fetch ( 'https://team-roster-300f5-default-rtdb.firebaseio.com/team.json').then(
        respond => respond.json()
      ).then(responseData => {
        setResults([]);
        let searchQuery = value.toLowerCase();
        for(const key in responseData) {
          let team = responseData[key].name.toLowerCase();
          if(team.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
            setResults(prevResult => {
              return [...prevResult, responseData[key].name]
            });
          }
        }
      }).catch(error => {
        console.warn(error);
      })
    } else {
      setResults([]);
    }
  }, [value]);

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
                value={value}
              />
              <div className="searchResults">
                {results.map((result, index_) => (
                  <a href="#" key={index_}>
                    <div className="searchResults">
                      {result}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
