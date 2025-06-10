import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">プライバシーポリシー</Link>
          <Link to="/contact" className="footer-link">お問い合わせ</Link>
        </div>
        <div className="footer-copyright">
          © 2024 ポケモンWordle検索ツール. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer; 