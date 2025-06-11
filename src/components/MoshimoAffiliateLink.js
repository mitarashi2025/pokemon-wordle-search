import React, { useState, useEffect } from 'react';

// 商品リスト
const AFFILIATE_PRODUCTS = [
  {
    name: "トップス Tシャツ 半袖Tシャツ ポケモン キャラクター カットソー 半袖 コットン 綿 UVカット レディース Honeys ハニーズ ポケモン／ゆるTシャツ",
    imageUrls: [
      "https://thumbnail.image.rakuten.co.jp/@0_mall/honeys-online/cabinet/goods/4400139226/4400139226.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/honeys-online/cabinet/goods/4400139226/4400139226_1.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/honeys-online/cabinet/goods/4400139226/4400139226_2.jpg"
    ],
    affiliateUrl: "https://item.rakuten.co.jp/honeys-online/4400139226/",
    eid: "S2szU"
  },
  {
    name: "【Pokemon ポケモン】 ポケモンキッズ ピカチュウ ワイヤレスヘッドホン 内臓マイク ゲーミングヘッド 子供用 ヘッドフォン キッズ Bluetooth ブルートゥース ボイスチャット",
    imageUrls: [
      "https://thumbnail.image.rakuten.co.jp/@0_mall/ajmart/cabinet/08431122/imgrc0099589119.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/ajmart/cabinet/08431122/imgrc0099589120.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/ajmart/cabinet/08431122/imgrc0099589121.jpg"
    ],
    affiliateUrl: "https://item.rakuten.co.jp/ajmart/10003659/",
    eid: "6zfvq"
  },
  {
    name: "Anker USB急速充電器 120W ライチュウモデル (USB PD 充電器 USB-A & USB-C 3ポート)【独自技術Anker GaNPrime採用 / PowerIQ 4.0 搭載】",
    imageUrls: [
      "https://thumbnail.image.rakuten.co.jp/@0_mall/anker/cabinet/b2148.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/anker/cabinet/b2148_2.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/anker/cabinet/b2148_3.jpg"
    ],
    affiliateUrl: "https://item.rakuten.co.jp/anker/b2148/",
    eid: "bbCYd"
  },
  {
    name: "【企画品】アネッサパーフェクトUVスキンケアミルクNA PK1 ポケモンコラボ ピカチュウ(60ml)【アネッサ】",
    imageUrls: [
      "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/155/4909978209155.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/155/4909978209155-2.jpg",
      "https://thumbnail.image.rakuten.co.jp/@0_mall/rakuten24/cabinet/155/4909978209155-3.jpg"
    ],
    affiliateUrl: "https://item.rakuten.co.jp/rakuten24/4909978209155/",
    eid: "IRqgh"
  }
];

function MoshimoAffiliateLink() {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    // 商品情報を読み込む
    setLoadedProducts(AFFILIATE_PRODUCTS);
  }, []);

  return (
    <div className="moshimo-affiliate-links">
      {loadedProducts.map((product, index) => (
        <div key={index} className="affiliate-product">
          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src={product.imageUrls[0]} 
              alt={product.name} 
              className="affiliate-product-image" 
              style={{ maxWidth: '200px', height: 'auto' }}
            />
            <p className="affiliate-product-name">{product.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MoshimoAffiliateLink; 