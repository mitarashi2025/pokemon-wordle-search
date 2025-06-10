import React from 'react';
import './Page.css';

function Profile() {
  return (
    <div className="page">
      <h1>開発者プロフィール</h1>
      <div className="content">
        <div className="section">
          <h2>自己紹介</h2>
          <p>
            SIer企業で働いています。<br />
            ポケモンWordleが好きで検索ツールを作成しました。<br />
          </p>
        </div>

        <div className="section">
          <h2>開発経緯</h2>
          <p>
            ポケモンWordleをプレイしていて、5文字のポケモンを探すのが大変だと感じたことがきっかけで、この検索ツールの開発を始めました。<br />
            PokeAPIを使用して、ポケモンのデータを取得し、使いやすい検索機能を実装しました。<br />
            また、生成AIの練習として、コードの9割をcursorで生成しています。<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile; 