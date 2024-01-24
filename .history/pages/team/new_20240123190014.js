import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { getPlayer } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';
import AddTeamMemberForm from '../../components/forms/addTeamMemberForm';

export default function ViewAllAuthors() {
  const [player, setPlayer] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const currentUserUid = firebase.auth().currentUser.uid;

  useEffect(() => {
    getPlayer().then(setPlayer);
  }, []);

  const handleUpdate = (firebaseKey) => {
    getPlayer().then(setPlayer);
    console.warn(`Update player with key: ${firebaseKey}`);
  };

  return (
    <div>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={() => setShowForm(true)}>
        Add Player
      </Button>
      {showForm && <AddTeamMemberForm />}
      {player.filter((p) => p.uid === currentUserUid).map((p) => (
        <TeamMemberCard key={p.firebaseKey} teamMemberObj={p} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
