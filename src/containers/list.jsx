import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/character-api';

const List = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1 data-testid="loading">Loading.1.2.3.</h1>;


  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default List;
