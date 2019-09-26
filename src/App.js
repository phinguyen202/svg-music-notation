import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ClefStaff } from './sheet-music-modules/staff-module.js'

function App() {
  return (
    <div>
      <h1> Welcome to SVG SHEET MUSIC</h1>
      <ClefStaff></ClefStaff>
    </div>
  );
}

export default App;
