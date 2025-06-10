import React from 'react';
import './Page.css';

function FAQ() {
  return (
    <div className="page">
      <h1>よくある質問</h1>
      <div className="content">
        <section className="section">
          <h2>検索について</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Q: なぜ5文字のポケモンだけなのですか？</h3>
              <p>A: Wordleのゲームルールに合わせて、5文字のポケモンのみを対象としています。</p>
            </div>
            <div className="faq-item">
              <h3>Q: 検索結果が表示されない場合は？</h3>
              <p>A: 入力した文字を含む5文字のポケモンが存在しない可能性があります。別の文字で試してみてください。</p>
            </div>
            <div className="faq-item">
              <h3>Q: ひらがなで検索できますか？</h3>
              <p>A: はい、ひらがなで入力しても自動的にカタカナに変換されて検索されます。</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>技術的な質問</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Q: どのようにポケモンの情報を取得していますか？</h3>
              <p>A: PokeAPIという無料のAPIを使用して、ポケモンの情報を取得しています。</p>
            </div>
            <div className="faq-item">
              <h3>Q: データは最新ですか？</h3>
              <p>A: PokeAPIのデータを参照しているため、常に最新の情報を提供しています。</p>
            </div>
            <div className="faq-item">
              <h3>Q: オフラインでも使えますか？</h3>
              <p>A: 一度アクセスしたデータはキャッシュされるため、オフラインでも基本的な検索は可能です。</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>その他の質問</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Q: このツールは無料ですか？</h3>
              <p>A: はい、完全に無料で使用できます。</p>
            </div>
            <div className="faq-item">
              <h3>Q: 不具合を見つけた場合は？</h3>
              <p>A: お問い合わせページからご連絡ください。できるだけ早く対応いたします。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQ; 