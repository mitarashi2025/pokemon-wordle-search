import React from 'react';
import './Page.css';

function PrivacyPolicy() {
  return (
    <div className="page">
      <h1>プライバシーポリシー</h1>
      <div className="content">
        <section>
          <h2>1. 基本方針</h2>
          <p>
            ポケモン検索は、ユーザーのプライバシーを尊重し、個人情報の保護に最大限の注意を払います。
            本アプリケーションは、ユーザーの個人情報を収集・保存することはありません。
          </p>
        </section>

        <section>
          <h2>2. 外部サービス</h2>
          <p>
            本アプリケーションは以下の外部サービスを使用しています：
          </p>
          <ul>
            <li>GitHub Pages（ホスティング）</li>
          </ul>
          <p>
            これらのサービスのプライバシーポリシーについては、
            各サービスの公式サイトをご確認ください。
          </p>
        </section>

        <section>
          <h2>3. お問い合わせ</h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、
            <a href="https://github.com/mitarashi2025/pokemon-wordle-search/issues" target="_blank" rel="noopener noreferrer">
              GitHubのIssue
            </a>
            からお願いいたします。
          </p>
        </section>

        <section>
          <h2>4. 改定</h2>
          <p>
            本プライバシーポリシーは、必要に応じて改定される場合があります。
            改定された場合は、本ページにて告知いたします。
          </p>
        </section>

        <section>
          <h2>5. 最終更新日</h2>
          <p>2025年6月10日</p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 