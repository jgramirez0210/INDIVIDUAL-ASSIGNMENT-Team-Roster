import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getSingleTeamMember } from '../../api/teamData';

const ViewTeamMember = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((fetchedTeamMember) => {
      setTeamMember(fetchedTeamMember);
      console.warn('teamMember', teamMember);
    });
  }, [teamMember]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {teamMember && <Card.Img variant="top" src={teamMember.image} alt={teamMember.name} style={{ height: '400px' }} />}
      <Card.Body>
        <Card.Title>{teamMember ? teamMember.name : 'Loading...'}</Card.Title>
        <p className="card-text bold">Position: {teamMember ? teamMember.roll : 'Loading...'}</p>
        {/* Rest of your code */}
      </Card.Body>
    </Card>
  );
};

export default ViewTeamMember;
