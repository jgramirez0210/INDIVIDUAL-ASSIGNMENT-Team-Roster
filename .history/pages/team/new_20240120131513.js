import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../../firebase'; // import your firebase instance

function Home() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("teamMembers").get();
      setTeamMembers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const addTeamMemberForm = () => {
    // Logic to add a new team member goes here
    console.log('Add team member button clicked');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <p>testeroo</p>
      {teamMembers.map((member, index) => (
        <p key={index}>{member.name}</p> // replace 'name' with the actual property name
      ))}
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
      <Button variant="primary" type="button" size="lg" className="copy-btn" onClick={addTeamMemberForm}>
        Add Team Member
      </Button>
    </div>
  );
}

export default Home;
