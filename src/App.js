import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import PokeList from '../src/PokemonList/PokeList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={PokeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
