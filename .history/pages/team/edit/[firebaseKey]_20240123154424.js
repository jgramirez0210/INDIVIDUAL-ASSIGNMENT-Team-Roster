import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleAuthor } from '../../../api/authorData';
import AuthorForm from '../../../components/forms/AuthorForm';
import { getSinglePlayer } from '../../../api/teamData';

export default function EditPlayer() {
  const [editPlayer, setEditPlayer] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setEditPlayer);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<Add obj={editPlayer} />);
}
