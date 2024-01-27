import React from 'react';
import algoliasearch from 'algoliasearch';
import NavBar from './NavBar';
import SearchBar from '../pages/search/searhBar';

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
);

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
      <SearchBar results={results} />Unhandled Runtime Error
TypeError: setSearch is not a function

Source
components\NavBar.js (34:33) @ onChange

  32 |     aria-label="Search"
  33 |     value={search}
> 34 |     onChange={(e) => setSearch(e.target.value)}
     |                     ^
  35 |   />
  36 |   <Button variant="outline-info" type="submit">Search</Button>
  37 | </Form>
    </>
  );
}

export default CommonAncestorComponent;
