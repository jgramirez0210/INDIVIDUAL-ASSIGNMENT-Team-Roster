import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, where, getDocs,
} from 'firebase/firestore';
import clientCredentials from '../utils/client';
import TeamMemberCard from '../components/TeamMemberCard';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    const firebaseConfig = clientCredentials;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const collectionRef = collection(db, 'team');
    const q = query(collectionRef, where('name', '>=', query), where('name', '<=', `${query}\uf8ff`));
    const docRefs = await getDocs(q);

    const res = [];

    docRefs.forEach((doc) => {
      res.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    setResults(res);
  };

  return (
    <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
      <form onSubmit={search}>
        <input
          type="text"
          className="w-full placeholder-gray-400 text-gray-900 p-4"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit" className="bg-white p-4">🔍</button>
      </form>
      <div>
        {results.map((result) => (
          <TeamMemberCard key={result.id} member={result} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
