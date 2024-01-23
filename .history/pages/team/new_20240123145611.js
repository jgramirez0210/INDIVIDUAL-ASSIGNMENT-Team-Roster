import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getTeamMember } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';
import BookForm from '../';

export default function ViewAllAuthors() {
  const [authors, setTeamMember] = useState([]);
  const [showForm, setShowForm] = useState(false); // Add this line
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
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={() => setShowForm(true)}>
        Add Team Member
      </Button>
      {showForm && <BookForm />} {/* Add this line */}
      {authors.filter((author) => author.uid === currentUserUid).map((author) => (
        <TeamMemberCard key={author.firebaseKey} teamMemberObj={author} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
