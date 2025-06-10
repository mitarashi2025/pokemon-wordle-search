import React from 'react';
import './Page.css';

function Links() {
  return (
    <div className="page">
      <h1>リンク集</h1>
      <div className="content">
        <section className="section">
          <h2>公式サイト</h2>
          <div className="official-links">
            <div className="link-card">
              <h3>ポケモン公式サイト</h3>
              <p>任天堂のポケモン公式サイトです。</p>
              <a href="https://www.pokemon.co.jp/" target="_blank" rel="noopener noreferrer" className="external-link">
                公式サイトへ
              </a>
            </div>
            <div className="link-card">
              <h3>ポケモン図鑑</h3>
              <p>ポケモンの詳細情報を確認できるサイトです。</p>
              <a href="https://zukan.pokemon.co.jp/" target="_blank" rel="noopener noreferrer" className="external-link">
                図鑑へ
              </a>
            </div>
            <div className="link-card">
              <h3>PokeAPI</h3>
              <p>ポケモンの情報を提供する無料のAPIです。</p>
              <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="external-link">
                PokeAPIへ
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>開発者向けリンク</h2>
          <div className="developer-links">
            <div className="link-card">
              <h3>GitHub</h3>
              <p>このプロジェクトのソースコードはGitHubで公開しています。</p>
              <a href="https://github.com/mitarashi2025/pokemon-wordle-search" target="_blank" rel="noopener noreferrer" className="external-link">
                GitHubへ
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>リンクについて</h2>
          <div className="link-policy">
            <p>当サイトへのリンクは自由です。ただし、以下の点にご注意ください：</p>
            <ul>
              <li>リンク先の内容が法令や公序良俗に反する場合は、リンクを削除させていただく場合があります</li>
              <li>リンク先の内容について、当サイトは一切の責任を負いません</li>
              <li>リンクを設定する際は、当サイトのURLを正確に記載してください</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Links; 