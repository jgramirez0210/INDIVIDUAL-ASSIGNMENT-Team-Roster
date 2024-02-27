import React from 'react';
import useSe

const Users = () => {
  const [searchParams] = useSearchParams();
  console.warn(searchParams); // ▶ URLSearchParams {}

  return <div>Users</div>;
};
