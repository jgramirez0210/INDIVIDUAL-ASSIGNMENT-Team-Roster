import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

function TeamMemberCard({ teamMemberObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${teamMemberObj.name}?`)) {
      deleteAuthorBooks(teamMemberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {teamMemberObj && <Card.Img variant="top" src={teamMemberObj.image} alt={teamMemberObj.name} style={{ height: '400px' }} />}
      <Card.Body>
        <Card.Title>{teamMemberObj && teamMemberObj.name}</Card.Title>
        <p className="card-text bold">{teamMemberObj && bookObj.sale && <span>SALE<br /></span> } ${bookObj && bookObj.price}</p>
        {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS  */}
        <Link href={`/author/${teamMemberObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${teamMemberObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TeamMemberCard.propTypes = {
  teamMemberObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    roll: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TeamMemberCard;
