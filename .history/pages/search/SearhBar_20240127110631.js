import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams); // ▶ URLSearchParams {}

  return <div>Users</div>;
};
