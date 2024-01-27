import NavBar from './NavBar';
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
  function NavBar({ search, setSearch, handleSearch }) {
    return (
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link passHref href="/">
                <Navbar.Brand>Home</Navbar.Brand>
              </Link>
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
