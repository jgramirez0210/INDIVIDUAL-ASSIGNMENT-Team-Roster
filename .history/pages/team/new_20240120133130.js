import React, { useEffect, useState } from 'react';
import { getTeamMember } from '../../api/teamData';
import TeamMemberCard from '../../components/AuthorCard';

export default function ViewAllAuthors() {
  const [authors, setTeamMember] = useState([]);

  useEffect(() => {
    getTeamMember().then(setTeamMember);
  }, []);

  const handleUpdate = (authorKey) => {
    // Code to update the author with the given key...
    getTeamMember().then(setTeamMember);
    console.warn(`Update author with key: ${authorKey}`);
  };

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
