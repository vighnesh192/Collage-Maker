import React from 'react';
import './App.css';

import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';

function App() {
  // Create a ref
  const canvasRef = React.createRef();

  return (
    <div id="main" className="flex flex-row height h-screen">
      {/* Pass ref to Canvas */}
      <Canvas ref={canvasRef}/> 
      <Sidebar canvasRef={canvasRef}/>
    </div>
  );
}

export default App;
