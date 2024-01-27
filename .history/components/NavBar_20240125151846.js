Do not use Array index in keysimport NavBar from './NavBar';
import SearchBar from './SearchBar';

function CommonAncestorComponent() {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const algoliaIndex = algoliaClient.initIndex('team');
    const searchResults = await algoliaIndex.search(search);

    setResults(searchResults.hits);
  };

  return (
    <>
      <NavBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <SearchBar results={results} />
    </>
  );
}
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
