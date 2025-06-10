import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ポケモンWordle検索ツール
        </Link>
        <button className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              ホーム
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/guide" className={`nav-link ${isActive('/guide') ? 'active' : ''}`}>
              使い方
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
              プロフィール
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className={`nav-link ${isActive('/faq') ? 'active' : ''}`}>
              よくある質問
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/links" className={`nav-link ${isActive('/links') ? 'active' : ''}`}>
              リンク集
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 