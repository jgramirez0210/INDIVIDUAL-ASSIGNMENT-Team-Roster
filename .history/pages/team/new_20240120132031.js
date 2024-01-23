import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';

export default function ViewAllAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  const handleUpdate = (authorKey) => {
    // Code to update the author with the given key...
    getAuthors().then(setAuthors);
    console.warn(`Update author with key: ${authorKey}`);
  };

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
