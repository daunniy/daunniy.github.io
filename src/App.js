import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeView from './pages/HomeView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;