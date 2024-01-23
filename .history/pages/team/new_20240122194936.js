import React, { useEffect, useState } from 'react';
import { getTeamMember } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';

export default function ViewAllAuthors() {
  const [authors, setTeamMember] = useState([]);

  useEffect(() => {
    getTeamMember().then(setTeamMember);
  }, []);

  const handleUpdate = (teamMemberKey) => {
    // Code to update the author with the given key...
    getTeamMember().then(setTeamMember);
    console.warn(`Update team member with key: ${teamMemberKey}`);
  };

  return (
    <div>
      {team.map((tea) => (
        <TeamMemberCard key={author.firebaseKey} teamMemberObj={author} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
