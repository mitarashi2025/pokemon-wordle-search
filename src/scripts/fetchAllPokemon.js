import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 全世代のポケモンを取得する関数
async function fetchAllPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const data = await response.json();
        
        const pokemonList = data.results.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }));

        // 各ポケモンの詳細情報を取得
        const pokemonDetails = [];
        for (const pokemon of pokemonList) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`);
                if (!response.ok) {
                    console.warn(`${pokemon.name} のデータが見つかりませんでした。スキップします。`);
                    continue;
                }
                const data = await response.json();
                pokemonDetails.push({
                    id: data.id,
                    name: data.name,
                    japaneseName: data.names.find(name => name.language.name === 'ja-Hrkt')?.name || data.name
                });
            } catch (err) {
                console.warn(`${pokemon.name} の取得中にエラー:`, err);
            }
        }

        // データを世代ごとに分類
        const generations = {
            gen1: pokemonDetails.filter(p => p.id <= 151),
            gen2: pokemonDetails.filter(p => p.id > 151 && p.id <= 251),
            gen3: pokemonDetails.filter(p => p.id > 251 && p.id <= 386),
            gen4: pokemonDetails.filter(p => p.id > 386 && p.id <= 493),
            gen5: pokemonDetails.filter(p => p.id > 493 && p.id <= 649),
            gen6: pokemonDetails.filter(p => p.id > 649 && p.id <= 721),
            gen7: pokemonDetails.filter(p => p.id > 721 && p.id <= 809),
            gen8: pokemonDetails.filter(p => p.id > 809 && p.id <= 905),
            gen9: pokemonDetails.filter(p => p.id > 905)
        };

        // 各世代のデータをファイルに保存
        for (const [gen, pokemon] of Object.entries(generations)) {
            const filePath = path.join(__dirname, '..', 'data', `${gen}Pokemon.js`);
            const content = `const ${gen}Pokemon = ${JSON.stringify(pokemon, null, 2)};\n\nexport default ${gen}Pokemon;`;
            fs.writeFileSync(filePath, content);
        }

        // 全ポケモンのデータを1つのファイルに保存
        const allPokemonPath = path.join(__dirname, '..', 'data', 'pokemonData.js');
        const allPokemonContent = `const allPokemon = ${JSON.stringify(pokemonDetails, null, 2)};\n\nexport default allPokemon;`;
        fs.writeFileSync(allPokemonPath, allPokemonContent);

        console.log('全ポケモンのデータを取得し、保存しました。');
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

fetchAllPokemon(); 