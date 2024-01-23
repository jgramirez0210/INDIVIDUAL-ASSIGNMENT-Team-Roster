import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  createTeamMember, updateTeamMember, getTeamMember,
} from '../../api/teamData';

function AddTeamMemberForm({ obj }) {
  const [formInput, setFormInput] = useState(obj || {
    name: '',
    image: '',
    uid: '',
  });
  const [, setTeamMember] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTeamMember(user.uid).then(setTeamMember);

    if (obj && obj.firebaseKey) {
      setFormInput({
        image: obj.image || '',
        name: obj.name || '',
        role: obj.role || '',
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj && obj.firebaseKey) {
      updateTeamMember(obj.firebaseKey, formInput).then(() => router.push('/team'));
    } else {
      createTeamMember({ ...formInput, uid: user.uid }).then(() => router.push('/team'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel label="Image URL" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Image URL"
          name="image"
          value={formInput.image}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Role" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Role"
          name="role"
          value={formInput.role}
          onChange={handleChange}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

AddTeamMemberForm.propTypes = {
  obj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AddTeamMemberForm.defaultProps = {
  obj: {},
};

export default AddTeamMemberForm;
