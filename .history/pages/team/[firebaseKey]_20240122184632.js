import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeamMemberCard from '../../components/TeamMemberCard';
import { getSingleAuthor } from '../../api/authorData';
import { getBooksByAuthor, getBooks } from '../../api/bookData';

const ViewTeamMember = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMemberDetails, setTeamMemberDetails] = useState({});
  const [team, setTeamMember] = useState([]);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((author) => {
      setTeamMemberDetails(author);
    });
    

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
