import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeamMemberCard from '../../components/TeamMemberCard';

import { getSingleTeamMember } from '../../api/teamData';

const ViewTeamMember = () => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMemberObj, setTeamMemberObj] = useState(null);
  const [teamMember , setTeamMembereamMember ] = useState([]);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((teamMember) => {
      console.warn('teamMember', teamMember);
      setTeamMemberObj(teamMember);
    });
  }, [firebaseKey]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {teamMemberObj && <Card.Img variant="top" src={teamMemberObj.image} alt={teamMemberObj.name} style={{ height: '400px' }} />}
      <Card.Body>
        <Card.Title>{teamMemberObj ? teamMemberObj.name : 'Loading...'}</Card.Title>
        <p className="card-text bold">Position: {teamMemberObj ? teamMemberObj.roll : 'Loading...'}</p>
        {/* Rest of your code */}
      </Card.Body>
    </Card>
  );
};

export default ViewTeamMember;
