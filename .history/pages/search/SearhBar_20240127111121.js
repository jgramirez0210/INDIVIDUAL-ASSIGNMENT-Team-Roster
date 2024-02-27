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
