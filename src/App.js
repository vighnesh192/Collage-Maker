import React from 'react';
import './App.css';

import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="main" className="flex flex-row height h-screen">
      <Canvas />
      <Sidebar />
    </div>
  );
}

export default App;
