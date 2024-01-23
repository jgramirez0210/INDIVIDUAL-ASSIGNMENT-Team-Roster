import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getSingleTeamMember } from '../../api/teamData';

const ViewTeamMember = () => {
  const currentUserUid = firebase.auth().currentUser.uid;
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((fetchedTeamMember) => {
      const teamMemberData = fetchedTeamMember[firebaseKey];
      setTeamMember(teamMemberData);
    });
  }, [firebaseKey]);

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
