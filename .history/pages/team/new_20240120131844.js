import { Button } from 'react-bootstrap';
import { signOut } from '../../utils/auth';
import { useAuth } from '../../utils/context/authContext';
import addTeamMemberForm from '../../components/forms/addTeamMemberForm';

function Home() {
  const { user } = useAuth();

  return (
    <div
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
