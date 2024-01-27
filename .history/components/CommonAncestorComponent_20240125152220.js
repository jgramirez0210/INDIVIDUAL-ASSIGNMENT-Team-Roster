import React from 'react';
import NavBar from './NavBar';
import SearchBar from '../pages/search/searhBar';
import al

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
