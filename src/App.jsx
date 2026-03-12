import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" data-theme={theme}>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark/light mode"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="container">
        <Logos />
        <h1>Vite + React</h1>
        <MainCard count={count} setCount={setCount} />
        <Footer />
      </div>
    </div>
  );
}

// Komponen kecil untuk logos
function Logos() {
  return (
    <div className="logo-container">
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

// Komponen utama card
function MainCard({ count, setCount }) {
  return (
    <div className="card">
      <button onClick={() => setCount(prev => prev + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

// Footer sederhana
function Footer() {
  return (
    <footer>
      Clean & Modern • Pure CSS • Vite + React
    </footer>
  );
}

export default App;