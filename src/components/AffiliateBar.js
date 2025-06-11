import React, { useEffect, useState } from 'react';
import MoshimoAffiliateLink from './MoshimoAffiliateLink';
import RakutenProducts from './RakutenProducts';
import './AffiliateBar.css';

function AffiliateBar({ position }) {
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズ変更時に実行
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初期チェック
    handleResize();

    // リサイズイベントリスナー
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // モバイル表示の場合、広告を表示しない
  if (isMobile) {
    return null;
  }

  // 左右の位置に応じたクラス名を設定
  const barClass = `affiliate-bar ${position}-bar`;

  return (
    <div className={barClass}>
      <div className="affiliate-content">
        <h3>おすすめ商品</h3>
        
        {/* もしも アフィリエイトリンク（Tシャツ） */}
        <MoshimoAffiliateLink />
        
        <div className="affiliate-footer">
          <a href="https://af.moshimo.com/af/c/click?a_id=XXXX&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fwww.rakuten.co.jp%2F" target="_blank" rel="noopener noreferrer">
            楽天市場で探す
          </a>
        </div>
      </div>
    </div>
  );
}

export default AffiliateBar; 