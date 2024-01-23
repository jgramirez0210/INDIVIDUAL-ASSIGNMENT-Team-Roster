import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BookCard from '../../components/BookCard';
import { getSingleAuthor } from '../../api/authorData';
import { getBooksByAuthor, getBooks } from '../../api/bookData';

const ViewAuthor = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [authorDetails, setAuthorDetails] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getSingleAuthor(firebaseKey).then((author) => {
      setAuthorDetails(author);
    });

    getBooksByAuthor(firebaseKey).then((fetchedBooks) => {
      setBooks(fetchedBooks);
    });
  }, [firebaseKey]);

  return (
    <div>
      <h1>{authorDetails ? `${authorDetails.first_name} ${authorDetails.last_name}` : 'Loading...'}</h1>
      <p>Email: {authorDetails && authorDetails.email}</p>
      <p>Favorite: {authorDetails && (authorDetails.favorite ? ' 🤍' : '')}</p>
      <h2>Books:</h2>
      {books.map((book) => (
        <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getBooks} />
      ))}
    </div>
  );
};

export default ViewAuthor;
