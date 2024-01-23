import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getPlayer } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';
import AddTeamMemberForm from '../../components/forms/addTeamMemberForm';

export default function ViewAllAuthors() {
  const [player, setPlayer] = useState([]);
  const [showForm, setShowForm] = useState(false); // Add this line
  const currentUserUid = firebase.auth().currentUser.uid;

  useEffect(() => {
    getPlayer().then(setPlayer);
  }, []);

  const handleUpdate = (playerKey) => {
    getPlayer().then(setPlayer);
    console.warn(`Update player with key: ${playerKey}`);
  };

  return (
    <div>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={() => setShowForm(true)}>
        Add Player
      </Button>
      {showForm && <AddTeamMemberForm />} {/* Add this line */}
      {player.filter((p) => p.uid === currentUserUid).map((p) => (
        <TeamMemberCard key={p.firebaseKey} teamMemberObj={p} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
