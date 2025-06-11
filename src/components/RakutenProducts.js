import React, { useState, useEffect } from 'react';
import './RakutenProducts.css';

function RakutenProducts({ keyword = 'ポケモン' }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 以下、以前はモックデータを使用していましたが、現在は削除します。
  // const mockProducts = [
  //   { id: 1, name: 'ポケモンカードゲーム ソード&シールド 強化拡張パック「VMAXクライマックス」 BOX', price: 9800, imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/surugaya-a-too/cabinet/2934/770130252m.jpg', affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurugaya-a-too%2F770130252%2F' },
  //   { id: 2, name: 'ポケモン ぬいぐるみ ピカチュウ Mサイズ', price: 2700, imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/toys-ys/cabinet/poke1/4521121208831.jpg', affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoys-ys%2F4521121208831%2F' },
  //   { id: 3, name: 'ポケットモンスター スカーレット - Switch', price: 4950, imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8202/4902370548202.jpg', affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F17020693%2F' },
  //   { id: 4, name: 'ポケモン レジェンズ アルセウス - Switch', price: 4950, imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7854/4902370547854.jpg', affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbook%2F16931531%2F' }
  // ];

  useEffect(() => {
    // 静的な商品リストを設定
    const staticProducts = [
      { 
        id: 1, 
        name: 'ポケモンカードゲーム ソード&シールド 強化拡張パック「VMAXクライマックス」 BOX', 
        price: 9800, 
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/surugaya-a-too/cabinet/2934/770130252m.jpg', 
        affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsurugaya-a-too%2F770130252%2F' 
      },
      { 
        id: 2, 
        name: 'ポケモン ぬいぐるみ ピカチュウ Mサイズ', 
        price: 2700, 
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/toys-ys/cabinet/poke1/4521121208831.jpg', 
        affiliateUrl: 'https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftoys-ys%2F4521121208831%2F' 
      }
    ];

    setProducts(staticProducts);
    setLoading(false);
  }, [keyword]);

  if (loading) return <div className="rakuten-loading">商品を読み込み中...</div>;
  if (error) return <div className="rakuten-error">エラーが発生しました: {error}</div>;

  return (
    <div className="rakuten-products">
      <h3>おすすめポケモングッズ</h3>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="product-link">
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                <p className="product-price">¥{product.price.toLocaleString()}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="rakuten-footer">
        <a 
          href="https://hb.afl.rakuten.co.jp/ichiba/XXXXXXXXXXXX?pc=https%3A%2F%2Fwww.rakuten.co.jp%2F" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          楽天市場で他のポケモングッズを探す
        </a>
      </div>
    </div>
  );
}

export default RakutenProducts; 