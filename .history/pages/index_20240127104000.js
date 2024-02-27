import firebase from 'firebase/app';
import Button from 'react-bootstrap/Button';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlayer } from '../../api/teamData';
import TeamMemberCard from '../../components/TeamMemberCard';

export default function ViewAllPlayers() {
  const [player, setPlayer] = useState([]);
  const currentUserUid = firebase.auth().currentUser.uid;
  const router = useRouter();

  useEffect(() => {
    getPlayer().then(setPlayer);
  }, []);

  const handleUpdate = () => {
    getPlayer().then(setPlayer);
  };

  return (
    <div>
      <Button
        variant="danger"
        type="button"
        size="lg"
        className="copy-btn"
        onClick={() => router.push('/team/edit/new')}
      >
        Add Player
      </Button>
      <div className="card-container">
        {player.filter((p) => p.uid === currentUserUid).map((p) => (
          <TeamMemberCard key={p.firebaseKey} teamMemberObj={p} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
