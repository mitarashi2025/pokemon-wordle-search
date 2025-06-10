import React, { useState, useEffect } from 'react';
import { allPokemon } from '../data/pokemonData.js';
import { toKatakana, isHiraganaOrKatakana } from '../utils/textUtils';
import './Page.css';

function Home() {
  // デバッグ情報
  console.log('allPokemon length:', allPokemon.length);
  console.log('First 5 pokemon:', allPokemon.slice(0, 5));

  const [pokemonList] = useState(() => {
    const filtered = allPokemon.filter(pokemon => pokemon.japaneseName.length === 5);
    console.log('Filtered pokemon length:', filtered.length);
    console.log('First 5 filtered pokemon:', filtered.slice(0, 5));
    return filtered;
  });
  const [filteredPokemon, setFilteredPokemon] = useState(pokemonList);
  const [exactMatches, setExactMatches] = useState(['', '', '', '', '']);
  const [containsLetters, setContainsLetters] = useState('');
  const [excludesLetters, setExcludesLetters] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState({});

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
    <div className="page">
      <h1>ポケモンWordle検索ツール</h1>
      <div className="content">
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
              <div className="pokemon-name">{pokemon.japaneseName}</div>
            </div>
          ))}
        </div>

        {selectedPokemon && (
          <div className="pokemon-details-overlay" onClick={handleCloseDetails}>
            <div className="pokemon-details" onClick={e => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseDetails}>×</button>
              <div className="pokemon-header">
                <div className="pokemon-title">
                  <h2>{selectedPokemon.japaneseName}</h2>
                  <p className="pokemon-number">No.{selectedPokemon.id.toString().padStart(3, '0')}</p>
                  <p className="pokemon-generation">{getGeneration(selectedPokemon.id)}</p>
                  <a
                    href={`https://zukan.pokemon.co.jp/detail/${selectedPokemon.id.toString().padStart(3, '0')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pokemon-link"
                  >
                    公式ポケモン図鑑で見る
                  </a>
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
      </div>
    </div>
  );
}

export default Home; 