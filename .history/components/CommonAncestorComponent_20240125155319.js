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
      <SearchBar results={results} />
    </>
  );
}

export default CommonAncestorComponent;
