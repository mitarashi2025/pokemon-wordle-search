const fs = require('fs');
const path = require('path');

const fetchPokemonDetails = async () => {
  const pokemonDetails = {};
  const allPokemon = require('../data/index.js').allPokemon;

  for (const pokemon of allPokemon) {
    try {
      console.log(`Fetching details for ${pokemon.japaneseName} (ID: ${pokemon.id})...`);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();

      pokemonDetails[pokemon.id] = {
        types: data.types.map(type => type.type.name),
        image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default
      };

      // 画像をダウンロード
      if (pokemonDetails[pokemon.id].image) {
        const imageResponse = await fetch(pokemonDetails[pokemon.id].image);
        const imageBuffer = await imageResponse.arrayBuffer();
        const imagePath = path.join(__dirname, '../assets/images', `${pokemon.id}.png`);
        fs.writeFileSync(imagePath, Buffer.from(imageBuffer));
        pokemonDetails[pokemon.id].image = `/images/${pokemon.id}.png`;
      }

      // 進捗を表示
      console.log(`Completed: ${pokemon.japaneseName}`);
    } catch (error) {
      console.error(`Error fetching details for ${pokemon.japaneseName}:`, error);
    }

    // APIの制限を考慮して少し待機
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // 詳細情報をJSONファイルとして保存
  const outputPath = path.join(__dirname, '../data/pokemonDetails.js');
  const content = `// このファイルは自動生成されます。直接編集しないでください。
const pokemonDetails = ${JSON.stringify(pokemonDetails, null, 2)};

export default pokemonDetails;
`;
  fs.writeFileSync(outputPath, content);
  console.log('Pokemon details saved to pokemonDetails.js');
};

// 画像保存用のディレクトリを作成
const imagesDir = path.join(__dirname, '../assets/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

fetchPokemonDetails().catch(console.error); 