import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="BASEUSDC.COM" className="logo" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button id="connectWallet" className="button">Connect Wallet</button>
        </div>
      </div>

      {/* 既存のHTMLをここに移行 */}
    </div>
  );
}

export default App;
