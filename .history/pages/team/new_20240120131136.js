import { Button } from 'react-bootstrap';
import { signOut } from '../../utils/auth';
import { useAuth } from '../../utils/context/authContext';
i

function Home() {
  const { user } = useAuth();

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
