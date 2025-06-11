import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Links from './pages/Links';


function App() {
  return (
    <Router basename="/pokemon-wordle-search">
      <div className="app">
        <Navigation />
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