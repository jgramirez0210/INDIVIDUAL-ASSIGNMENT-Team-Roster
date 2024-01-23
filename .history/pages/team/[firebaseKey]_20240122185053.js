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
      {teamMemberDetails && <Card.Img variant="top" src={teamMemberDetails.image} alt={teamMemberDetails.name} style={{ height: '400px' }} />}
      <Card.Body>
        <Card.Title>{teamMemberDetails.name}</Card.Title>
        <p className="card-text bold">Position: {teamMemberDetails.roll}</p>
        {/* Rest of your code */}
      </Card.Body>
    </TeamMemberCard>
  );
  );
};

export default ViewTeamMember;
