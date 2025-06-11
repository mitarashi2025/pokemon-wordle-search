import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

function Guide() {
  return (
    <div className="page">
      <h1>ポケモンWordle検索ツールの使い方</h1>
      <div className="content">
        <section className="section">
          <h2>基本的な使い方</h2>
          <div className="guide-steps">
            <div className="step">
              <h3>1. 検索フォームの使い方</h3>
              <p>
                検索フォームにポケモンの名前を入力してください。<br />
                ひらがな、カタカナのいずれでも検索可能です。<br />
                入力した文字を含むポケモンの名前が表示されます。
              </p>
            </div>
            <div className="step">
              <h3>2. 検索結果の見方</h3>
              <p>
                検索結果は、入力した文字を含むポケモンの名前が一覧で表示されます。<br />
                ポケモンの名前を選択すると、そのポケモンの詳細情報が表示されます。<br />
                各ポケモンの情報には公式サイトへのリンクと以下の内容が含まれます：<br />
              </p>
              <ul>
                <li>ポケモンの名前</li>
                <li>図鑑番号</li>
                <li>世代</li>
                <li>タイプ</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>よくある質問</h2>
          <div className="faq">
            <p>
              より詳細な質問と回答については、
              <Link to="/faq" className="link">よくある質問ページ</Link>
              をご覧ください。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Guide; 