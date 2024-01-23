import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import {
  createAuthor, updateAuthor, getAuthors,
} from '../../api/authorData';

const initialState = {
  image: '',
  name: '',
  role: '',
};

function addTeamMemberForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [, setTeamMember] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTeamMember(user.uid).then(setTeamMember);

    if (obj && obj.firebaseKey) {
      setFormInput({
        ...obj,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj && obj.firebaseKey) {
      updateTeamMember(formInput).then(() => router.push(`/team/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createTeamMember(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTeamMember(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{formInput.firebaseKey ? 'Update' : 'Create'} Team Member</h2>
    
      {/* FULL NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Full Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Full Name"
          name="full_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      
      {/* AUTHOR EMAIL INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Author Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author Email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{formInput.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    author_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};

export default AuthorForm;
