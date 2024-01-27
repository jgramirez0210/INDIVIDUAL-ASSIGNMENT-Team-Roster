import React, { useState } from 'react';
import { clientCredentials } from '../utils/client'

const SearchBar = () => {
  const [query, setQuery] = useState('');

  function search(e) {
    e.preventDefault();
    setQuery(e.target.value);

    const firebaseConfig = {clientCredentials}

    const app = initializeApp(firebaseConfig)

    db = getFirestore(app)

    const collection_ref = collection( , 'team')
    const q = query(collection_ref, where("name", ">=", "A"), where("name", "<=", "A\uf8ff"))
    const doc_refs = await getDocs(q)

    const res = []

    doc_refs.forEach(team => {
        res.push({
            id: team.id, 
            ...team.data()
        })
    })

    setResults(res)
}

  }

  return (
    <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
      <input
        type="text"
        className="w-full placeholder-gray-400 text-gray-900 p-4"
        placeholder="Search"
        onChange={search}
        value={query}
      />
      <button type="submit" className="bg-white p-4">🔍</button>
    </div>
  );
};

export default SearchBar;
