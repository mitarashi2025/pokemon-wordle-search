import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          ポケモンWordle検索ツール
        </NavLink>
        <button className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              ホーム
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/guide" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              使い方
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              プロフィール
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faq" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              よくある質問
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/links" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
              リンク集
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 