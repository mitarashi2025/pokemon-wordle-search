import gen1Pokemon from './gen1Pokemon.js';
import gen2Pokemon from './gen2Pokemon.js';
import gen3Pokemon from './gen3Pokemon.js';
import gen4Pokemon from './gen4Pokemon.js';
import gen5Pokemon from './gen5Pokemon.js';
import gen6Pokemon from './gen6Pokemon.js';
import gen7Pokemon from './gen7Pokemon.js';
import gen8Pokemon from './gen8Pokemon.js';
import gen9Pokemon from './gen9Pokemon.js';
import allPokemonData from './pokemonData.js';

// 各世代のポケモンデータをエクスポート
export {
    gen1Pokemon,
    gen2Pokemon,
    gen3Pokemon,
    gen4Pokemon,
    gen5Pokemon,
    gen6Pokemon,
    gen7Pokemon,
    gen8Pokemon,
    gen9Pokemon,
    allPokemonData
};

// すべてのポケモンの名前を結合した配列
const allPokemon = [
  ...gen1Pokemon,
  ...gen2Pokemon,
  ...gen3Pokemon,
  ...gen4Pokemon,
  ...gen5Pokemon,
  ...gen6Pokemon,
  ...gen7Pokemon,
  ...gen8Pokemon,
  ...gen9Pokemon
];

export {
    allPokemon
}; 