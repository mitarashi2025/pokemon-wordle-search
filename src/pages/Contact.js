import React from 'react';
import './Page.css';

function Contact() {
  return (
    <div className="page">
      <h1>お問い合わせ</h1>
      <div className="content">
        <section>
          <h2>GitHubのIssue</h2>
          <p>
            バグの報告や機能の要望、その他のお問い合わせは、
            <a href="https://github.com/mitarashi2025/pokemon-wordle-search/issues" target="_blank" rel="noopener noreferrer">
              GitHubのIssue
            </a>
            からお願いいたします。
          </p>
          <p>
            Issueを作成する際は、以下の点にご注意ください：
          </p>
          <ul>
            <li>タイトルは簡潔かつ具体的に記入してください</li>
            <li>問題の詳細な説明を記入してください</li>
            <li>再現手順がある場合は、具体的に記入してください</li>
            <li>使用しているブラウザやOSの情報があると助かります</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Contact; 