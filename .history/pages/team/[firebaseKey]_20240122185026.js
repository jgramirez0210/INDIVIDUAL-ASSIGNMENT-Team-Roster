import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeamMemberCard from '../../components/TeamMemberCard';

const ViewTeamMember = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMemberDetails, setTeamMemberDetails] = useState({});
  const [team, setTeamMember] = useState([]);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((author) => {
      setTeamMemberDetails(author);
    });
  }, [firebaseKey]); // Added closing parenthesis and bracket here

  return (
    <TeamMemberCard style={{ width: '18rem', margin: '10px' }}>
      {teamMemberObj && <Card.Img variant="top" src={teamMemberObj.image} alt={teamMemberObj.name} style={{ height: '400px' }} />}
      <Card.Body>
        <Card.Title>{teamMemberObj.name}</Card.Title>
        <p className="card-text bold">Position: {teamMemberObj.roll}</p>
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getBooks} />
        ))}
      </Card.Body>
    </TeamMemberCard>
  );
};

export default ViewTeamMember;
