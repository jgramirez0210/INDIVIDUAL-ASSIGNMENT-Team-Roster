import { useState } from 'react';
import { useRouter } from 'next/router';
import use
import { db } from '../../firebase';

function AddTeamMemberForm() {
  const [name, setName] = useState('');
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const member = {
      name,
      uid: currentUser.uid,
    };

    await db.collection('members').add(member);

    router.push('/team');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default AddTeamMemberForm;
