import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getTeamMember } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';
impo

export default function ViewAllAuthors() {
  const [authors, setTeamMember] = useState([]);
  const currentUserUid = firebase.auth().currentUser.uid;

  useEffect(() => {
    getTeamMember().then(setTeamMember);
  }, []);

  const handleUpdate = (teamMemberKey) => {
    getTeamMember().then(setTeamMember);
    console.warn(`Update team member with key: ${teamMemberKey}`);
  };

  return (
    <div>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={BookForm}>
        Add Team Member
      </Button>
      {authors.filter((author) => author.uid === currentUserUid).map((author) => (
        <TeamMemberCard key={author.firebaseKey} teamMemberObj={author} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
