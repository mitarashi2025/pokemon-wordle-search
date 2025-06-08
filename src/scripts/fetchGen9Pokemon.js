import fetch from 'node-fetch';

async function fetchGen9Pokemon() {
  try {
    // 第9世代のポケモンの範囲（905-1010）
    const startId = 905;
    const endId = 1010;
    const pokemonList = [];

    for (let id = startId; id <= endId; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await response.json();
      
      // 日本語名を取得
      const japaneseName = data.names.find(name => name.language.name === 'ja-Hrkt');
      if (japaneseName) {
        pokemonList.push(japaneseName.name);
      }
    }

    // 結果を出力
    console.log('export const gen9Pokemon = [');
    pokemonList.forEach(name => {
      console.log(`  '${name}',`);
    });
    console.log('];');

  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

fetchGen9Pokemon(); 