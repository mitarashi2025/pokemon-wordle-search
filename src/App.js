import React, { useState, useEffect } from 'react';
import './App.css';
import { allPokemon } from './data/index.js';

// ひらがなをカタカナに変換する関数
const toKatakana = (str) => {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + 0x60);
  });
};

// ひらがなまたはカタカナかどうかをチェックする関数
const isHiraganaOrKatakana = (str) => {
  return /^[\u3040-\u309F\u30A0-\u30FF]+$/.test(str);
};

function App() {
  const [pokemonList] = useState(allPokemon.filter(pokemon => pokemon.japaneseName.length === 5));
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonList);
  const [exactMatches, setExactMatches] = useState(['', '', '', '', '']);
  const [containsLetters, setContainsLetters] = useState('');
  const [excludesLetters, setExcludesLetters] = useState('');

  useEffect(() => {
    let filtered = pokemonList;

    // 完全一致する文字のフィルタリング
    exactMatches.forEach((letter, index) => {
      if (letter) {
        const katakanaLetter = toKatakana(letter);
        filtered = filtered.filter(pokemon => 
          pokemon.japaneseName[index] === katakanaLetter
        );
      }
    });

    // 含まれる文字のフィルタリング
    if (containsLetters) {
      const letters = containsLetters.split('').map(toKatakana);
      filtered = filtered.filter(pokemon =>
        letters.every(letter => pokemon.japaneseName.includes(letter))
      );
    }

    // 含まれない文字のフィルタリング
    if (excludesLetters) {
      const letters = excludesLetters.split('').map(toKatakana);
      filtered = filtered.filter(pokemon =>
        letters.every(letter => !pokemon.japaneseName.includes(letter))
      );
    }

    setFilteredPokemon(filtered);
  }, [exactMatches, containsLetters, excludesLetters, pokemonList]);

  const handleExactMatchChange = (index, value) => {
    // ひらがなまたはカタカナ以外の文字は入力できないようにする
    if (value && !isHiraganaOrKatakana(value)) {
      return;
    }
    const newExactMatches = [...exactMatches];
    newExactMatches[index] = value;
    setExactMatches(newExactMatches);
  };

  const handleContainsLettersChange = (value) => {
    // ひらがなまたはカタカナ以外の文字は入力できないようにする
    if (value && !isHiraganaOrKatakana(value)) {
      return;
    }
    setContainsLetters(value);
  };

  const handleExcludesLettersChange = (value) => {
    // ひらがなまたはカタカナ以外の文字は入力できないようにする
    if (value && !isHiraganaOrKatakana(value)) {
      return;
    }
    setExcludesLetters(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ポケモン検索</h1>
        
        <div className="search-container">
          <div className="search-section">
            <h3>位置がわかっている文字</h3>
            <p className="description">ポケモン名の何文字目に何の文字が入るかわかっている場合は入力してください（ひらがな・カタカナ）</p>
            <div className="exact-matches">
              {exactMatches.map((letter, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={letter}
                  onChange={(e) => handleExactMatchChange(index, e.target.value)}
                  className="exact-match-input"
                />
              ))}
            </div>
          </div>

          <div className="search-section">
            <h3>含まれる文字</h3>
            <p className="description">ポケモン名に含まれることがわかっている文字を入力してください（ひらがな・カタカナ）</p>
            <div className="filter-group">
              <input
                type="text"
                value={containsLetters}
                onChange={(e) => handleContainsLettersChange(e.target.value)}
                className="filter-input"
              />
            </div>
          </div>

          <div className="search-section">
            <h3>含まれない文字</h3>
            <p className="description">ポケモン名に含まれないことがわかっている文字を入力してください（ひらがな・カタカナ）</p>
            <div className="filter-group">
              <input
                type="text"
                value={excludesLetters}
                onChange={(e) => handleExcludesLettersChange(e.target.value)}
                className="filter-input"
              />
            </div>
          </div>
        </div>

        <div className="pokemon-list">
          {filteredPokemon.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-item">
              {pokemon.japaneseName}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App; 