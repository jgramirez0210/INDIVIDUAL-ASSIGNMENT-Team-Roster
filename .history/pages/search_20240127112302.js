import { useRouter } from 'next/router';

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = router.query.q;

  return <div>Search results for &quote{searchQuery}&quote</div>;
};

export default SearchResults;
JSX element 'input' has no corresponding closing tag.
