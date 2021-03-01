import React from 'react';
import './styles/main.css';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App p-6">
      <h1 className="text-3xl font-bold mb-3">Pokedex</h1>
      <p className="text-gray-600 mb-4">Seach for Pokemons by name or filter them by type.</p>
      <Filters />
    </div>
  );
}

export default App;
