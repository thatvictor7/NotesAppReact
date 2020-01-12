import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import NotesGrid from './components/NotesGrid'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NotesGrid />
    </div>
  );
}

export default App;
