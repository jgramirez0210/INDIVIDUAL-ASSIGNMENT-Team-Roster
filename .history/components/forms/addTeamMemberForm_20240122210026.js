import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createTeamMember, getTeamMember, updateTeamMember } from '../../api/teamData';

const initialState = {
  image: '',
  name: '',
  roll: '',
};

function AddTeamMemberForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [team, setTeamMember] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTeamMember(user.uid).then(setTeamMember);

    if (obj && obj.firebaseKey) setFormInput(obj);
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
    if (obj.firebaseKey) {
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
      <h2 className="text-white mt-5">{obj && obj.firebaseKey ? 'Update' : 'Create'} Team Member</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First & Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="First & Last Name"
          name="full_name"
          value={formInput.full_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Player Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Player position" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the players position"
          name="position"
          value={formInput.position}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* AUTHOR SELECT
      <FloatingLabel controlId="floatingSelect" label="Author">
        <Form.Select
          aria-label="Author"
          name="author_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.author_id} // FIXME: modify code to remove error
          required
        >
          <option value="">Select an Author</option>
          {
            authors.map((author) => (
              <option
                key={author.firebaseKey}
                value={author.firebaseKey}
              >
                {author.first_name} {author.last_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel> */}
      {/* SUBMIT BUTTON  */}
      <Button type="submit">{formInput.firebaseKey ? 'Update' : 'Create'} Book</Button>
    </Form>
  );
}

BookForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    sale: PropTypes.bool,
    title: PropTypes.string,
    author_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

BookForm.defaultProps = {
  obj: initialState,
};

export default BookForm;
