import React, { useState, useEffect } from 'react';
import './App.css';
import { allPokemon } from './data/index.js';

function App() {
  const [pokemonList] = useState(allPokemon.filter(name => name.length === 5));
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState(allPokemon);

  useEffect(() => {
    const filtered = pokemonList.filter(pokemon =>
      pokemon.includes(searchTerm)
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemonList]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ポケモン検索</h1>
        <input
          type="text"
          placeholder="ポケモンの名前をカタカナで入力..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="pokemon-list">
          {filteredPokemon.map((pokemon, index) => (
            <div key={index} className="pokemon-item">
              {pokemon}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App; 