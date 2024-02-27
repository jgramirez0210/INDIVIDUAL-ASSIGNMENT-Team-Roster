import { useRouter } from 'next/router';

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = router.query.q;

  return <div>Search results for &quote{searchQuery}&quote</div>;
};

export default SearchResults;
import { useRouter } from 'next/router'

const SearchBar = () => {
  const router = useRouter();
  const searchQuery = router.query.q;

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="search" defaultValue={searchQuery} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
