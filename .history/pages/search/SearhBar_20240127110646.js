import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams] = useSearchParams();
  console.warn(searchParams); // ▶ URLSearchParams {}

  return <div>Users</div>;
};
