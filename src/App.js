import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AffiliateBar from './components/AffiliateBar';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Links from './pages/Links';

// ひらがなをカタカナに変換する関数
const toKatakana = (str) => {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    return String.fromCharCode(match.charCodeAt(0) + 0x60);
  });
};

// ひらがなまたはカタカナかどうかをチェックする関数
const isHiraganaOrKatakana = (str) => {
  return /^[\u3040-\u309F\u30A0-\u30FF]+$/.test(str);
};

// タイプ英語→日本語変換マップ
const typeTranslations = {
  normal: 'ノーマル',
  fire: 'ほのお',
  water: 'みず',
  electric: 'でんき',
  grass: 'くさ',
  ice: 'こおり',
  fighting: 'かくとう',
  poison: 'どく',
  ground: 'じめん',
  flying: 'ひこう',
  psychic: 'エスパー',
  bug: 'むし',
  rock: 'いわ',
  ghost: 'ゴースト',
  dragon: 'ドラゴン',
  dark: 'あく',
  steel: 'はがね',
  fairy: 'フェアリー'
};

function App() {
  return (
    <Router basename="/pokemon-wordle-search">
      <div className="app">
        <Navigation />
        <AffiliateBar position="left" />
        <AffiliateBar position="right" />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 