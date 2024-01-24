import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      // className="text-center d-flex flex-column justify-content-center align-content-center"
      // style={{
      //   height: '90vh',
      //   padding: '30px',
      //   maxWidth: '400px',
      //   margin: '0 auto',
      // }}
    
      <div className="greeting">
        <h1>Hello {user.displayName}! </h1>
        <p>Click the button below to logout!</p>
      </div>
      <Button type="button" size="lg" className="sign-out" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
