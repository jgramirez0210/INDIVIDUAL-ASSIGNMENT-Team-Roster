import { useRouter } from 'next/router';

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = router.query.q;

  // Fetch and display search results using searchQuery...

  return <div>Search results for &quote{searchQuery}"</div>;
};

export default SearchResults;
