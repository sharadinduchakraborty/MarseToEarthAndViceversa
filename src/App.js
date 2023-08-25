import React from 'react';
import EarthToMars from './Components/EarthtoMars';
import MarsToEarth from './Components/MarstoEarth';
import './App.css'; // You can add your own styling

function App() {
  return (
    <div className="App">
      <EarthToMars />
      <MarsToEarth />
    </div>
  );
}

export default App;
