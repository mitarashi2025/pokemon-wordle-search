import { gen1Pokemon } from './gen1Pokemon.js';
import { gen2Pokemon } from './gen2Pokemon.js';
import { gen3Pokemon } from './gen3Pokemon.js';
import { gen4Pokemon } from './gen4Pokemon.js';
import { gen5Pokemon } from './gen5Pokemon.js';
import { gen6Pokemon } from './gen6Pokemon.js';
import { gen7Pokemon } from './gen7Pokemon.js';
import { gen8Pokemon } from './gen8Pokemon.js';
import { gen9Pokemon } from './gen9Pokemon.js';

// 各世代のポケモンデータをエクスポート
export { gen1Pokemon } from './gen1Pokemon.js';
export { gen2Pokemon } from './gen2Pokemon.js';
export { gen3Pokemon } from './gen3Pokemon.js';
export { gen4Pokemon } from './gen4Pokemon.js';
export { gen5Pokemon } from './gen5Pokemon.js';
export { gen6Pokemon } from './gen6Pokemon.js';
export { gen7Pokemon } from './gen7Pokemon.js';
export { gen8Pokemon } from './gen8Pokemon.js';
export { gen9Pokemon } from './gen9Pokemon.js';

// すべてのポケモンの名前を結合した配列
export const allPokemon = [
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