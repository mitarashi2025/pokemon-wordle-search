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

// タイプ英語→日本語変換マップ
const typeTranslations = {
  normal: 'ノーマル',
  fire: 'ほのお',
  water: 'みず',
  electric: 'でんき',
  grass: 'くさ',
  ice: 'こおり',
  fighting: 'かくとう',
  poison: 'どく',
  ground: 'じめん',
  flying: 'ひこう',
  psychic: 'エスパー',
  bug: 'むし',
  rock: 'いわ',
  ghost: 'ゴースト',
  dragon: 'ドラゴン',
  dark: 'あく',
  steel: 'はがね',
  fairy: 'フェアリー'
};

function App() {
  const [pokemonList] = useState(allPokemon.filter(pokemon => pokemon.japaneseName.length === 5));
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonList);
  const [exactMatches, setExactMatches] = useState(['', '', '', '', '']);
  const [containsLetters, setContainsLetters] = useState('');
  const [excludesLetters, setExcludesLetters] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});

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

  const handlePokemonClick = async (pokemon) => {
    setSelectedPokemon(pokemon);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();
      setPokemonDetails(prev => ({
        ...prev,
        [pokemon.id]: {
          types: data.types.map(type => type.type.name)
        }
      }));
    } catch (error) {
      console.error('ポケモン情報の取得に失敗しました:', error);
    }
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  const getGeneration = (id) => {
    if (id <= 151) return '第1世代';
    if (id <= 251) return '第2世代';
    if (id <= 386) return '第3世代';
    if (id <= 493) return '第4世代';
    if (id <= 649) return '第5世代';
    if (id <= 721) return '第6世代';
    if (id <= 809) return '第7世代';
    if (id <= 898) return '第8世代';
    return '第9世代';
  };

  const getTypeColor = (type) => {
    const typeColors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[type] || '#A8A878';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ポケモンWordle検索ツール</h1>
        
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
            <div 
              key={pokemon.id} 
              className="pokemon-item"
              onClick={() => handlePokemonClick(pokemon)}
            >
              <img 
                src={`/images/${pokemon.id}.png`}
                alt={pokemon.japaneseName}
                className="pokemon-image"
              />
              <span className="pokemon-name">{pokemon.japaneseName}</span>
            </div>
          ))}
        </div>

        {selectedPokemon && (
          <div className="pokemon-details-overlay" onClick={handleCloseDetails}>
            <div className="pokemon-details" onClick={e => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseDetails}>×</button>
              <div className="pokemon-header">
                <img 
                  src={`/images/${selectedPokemon.id}.png`}
                  alt={selectedPokemon.japaneseName}
                  className="pokemon-detail-image"
                />
                <div className="pokemon-title">
                  <h2>{selectedPokemon.japaneseName}</h2>
                  <p className="pokemon-number">No.{selectedPokemon.id.toString().padStart(3, '0')}</p>
                  <p className="pokemon-generation">{getGeneration(selectedPokemon.id)}</p>
                </div>
              </div>
              <div className="pokemon-info">
                <div className="info-section">
                  <h3>基本情報</h3>
                  <div className="type-container">
                    {pokemonDetails[selectedPokemon.id]?.types.map((type, index) => (
                      <span 
                        key={index} 
                        className="type-badge"
                        style={{ backgroundColor: getTypeColor(type) }}
                      >
                        {typeTranslations[type] || type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <footer className="footer">
        <div className="footer-links">
          <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          <span className="separator">|</span>
          <a href="/terms.html" target="_blank" rel="noopener noreferrer">利用規約</a>
        </div>
        <p className="copyright">© 2024 ポケモンWordle検索ツール</p>
      </footer>
    </div>
  );
}

export default App; 