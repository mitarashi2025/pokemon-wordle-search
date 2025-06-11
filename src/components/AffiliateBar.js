import React, { useEffect, useState } from 'react';
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

  // モバイル表示
  if (isMobile) {
    return (
      <div className="affiliate-mobile">
        <div id={`rakuten-widget-mobile-${position}`} className="rakuten-widget mobile-widget">
          {/* 楽天ウィジェットがここに表示されます */}
        </div>
      </div>
    );
  }
  
  // デスクトップ表示
  return (
    <div className={`affiliate-bar ${position}-bar`}>
      <div id={`rakuten-widget-${position}`} className="rakuten-widget desktop-widget">
        {/* 楽天ウィジェットがここに表示されます */}
      </div>
    </div>
  );
}

export default AffiliateBar; 