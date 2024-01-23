import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TeamMemberCard from '../../components/TeamMemberCard';

import { getSingleTeamMember } from '../../api/teamData';

const ViewTeamMember = (teamMember) => {
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    getSingleTeamMember(firebaseKey).then((fetchedTeamMember) => {
      setTeamMember(fetchedTeamMember);
    });
  }, [firebaseKey]);

  return (
    <div>
      {teamMember ? <TeamMemberCard teamMember={teamMember} /> : 'Loading...'}
    </div>
  );
};

export default ViewTeamMember;
