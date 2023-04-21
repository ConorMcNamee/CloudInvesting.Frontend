import React from 'react';
import './App.css';

import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <p>hello world</p>
      </main>
    </div>
  );
}

export default App;
